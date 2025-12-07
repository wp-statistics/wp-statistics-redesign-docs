---
title: "Engagement Tracking"
type: "technical"
category: "architecture"
status: "Done"
sidebar_position: 4
---

# Engagement Tracking

WP Statistics v15 implements a client-side engagement tracking system that measures active user time on pages. This enables accurate session duration and time-on-page metrics without relying on cookies or server-side polling.

## Overview

The engagement tracking system:

- Measures actual user engagement time (not just page load to unload)
- Tracks visibility, focus, and user activity states
- Batches data delivery to reduce HTTP overhead
- Uses `sendBeacon` for reliable exit-time data transmission
- Identifies sessions server-side via visitor hash (no session ID passed from client)

## Architecture

### Component Overview

The engagement tracking system consists of client-side and server-side components working together:

#### Client-Side (Browser)

| Component | File | Responsibility |
|-----------|------|----------------|
| **EngagementTracker** | `engagement-tracker.js` | Monitors visibility, focus, and user activity to calculate active engagement time |
| **BatchQueue** | `batch-queue.js` | Collects engagement data and custom events, delivers reliably via sendBeacon on page exit |
| **UserTracker** | `user-tracker.js` | Orchestrates initialization and handles SPA navigation |

#### Server-Side (PHP)

| Component | Class | Responsibility |
|-----------|-------|----------------|
| **BatchTracking** | `BatchTracking.php` | Receives batch requests, identifies session by visitor hash, updates duration |
| **SessionModel** | `SessionModel.php` | Queries active sessions by visitor hash |
| **VisitorProfile** | `VisitorProfile.php` | Generates visitor hash from IP + User Agent |

#### Endpoint

| Endpoint | Description |
|----------|-------------|
| `POST /wp-admin/admin-ajax.php` | AJAX endpoint with `action=wp_statistics_batch` |

### Client-Side Components

#### 1. Engagement Tracker (`engagement-tracker.js`)

Monitors user engagement state based on three conditions:

| Condition | Description | Detection Method |
|-----------|-------------|------------------|
| **Visibility** | Page is visible (not in background tab) | `document.visibilityState` |
| **Focus** | Browser window has focus | `document.hasFocus()` |
| **Activity** | User has interacted recently | Last activity < 30 seconds |

**Activity Events Monitored:**
- `click`
- `scroll`
- `keypress`
- `mousemove`
- `touchstart`

**Engagement State Logic:**
```
isEngaged = isVisible AND isFocused AND isUserActive
```

When `isEngaged` changes:
- **Start engagement:** Record start timestamp
- **Stop engagement:** Add elapsed time to running total

#### 2. Batch Queue (`batch-queue.js`)

Manages data delivery with reliability features:

| Feature | Value | Purpose |
|---------|-------|---------|
| Max queue size | 10 events | Flush when full |
| Min flush interval | 3 seconds | Prevent rapid-fire sends |
| Max payload size | 63 KB | Stay under sendBeacon limit |

**Flush Triggers:**
- Page visibility changes to `hidden`
- `pagehide` event fires (navigation, tab close)
- Queue reaches max size
- Custom events queued

### Server-Side Components

#### BatchTracking Controller

Handles batch requests via WordPress AJAX:

**Endpoint:** `POST /wp-admin/admin-ajax.php` with `action=wp_statistics_batch`

**Request Payload (FormData):**
- `action`: `wp_statistics_batch`
- `batch_data`: JSON string containing:
```json
{
  "engagement_time": 45000,
  "events": [
    {
      "type": "custom_event",
      "data": {
        "event_name": "button_click",
        "event_data": { "button_id": "cta-signup" }
      }
    }
  ]
}
```

**Response:**
```json
{
  "status": true,
  "processed": 2,
  "errors": []
}
```

## Data Flow

### Session Duration Update

```
1. Client: Page exit triggered (visibility hidden or pagehide)
         ↓
2. Client: BatchQueue.flush() called
         ↓
3. Client: Get engagement time from EngagementTracker
         ↓
4. Client: Send via sendBeacon to AJAX endpoint (or fetch with keepalive as fallback)
         ↓
5. Server: BatchTracking receives request
         ↓
6. Server: Generate visitor hash from IP + User Agent
         ↓
7. Server: Query for active session by hash
           (session.ended_at >= NOW() - 30 minutes)
         ↓
8. Server: Update session record:
           - duration = engagement_time / 1000 (convert ms to seconds)
           - ended_at = current UTC time
```

### Session Identification (Server-Side)

The session is identified **server-side only** to prevent spoofing:

```php
// Get visitor's IP hash
$visitorProfile = new VisitorProfile();
$visitorHash = $visitorProfile->getProcessedIPForStorage();

// Find active session
$sessionModel = new SessionModel();
$session = $sessionModel->getActiveSessionByHash($visitorHash);
```

**Active Session Criteria:**
- Session's `ended_at` timestamp is within the last 30 minutes
- Matches visitor hash (IP + User Agent based)

## Database Storage

### Sessions Table

Engagement data is stored in `wp_statistics_sessions`:

| Field | Type | Description |
|-------|------|-------------|
| `duration` | int(11) unsigned | Total engagement time in seconds |
| `ended_at` | datetime | Last activity timestamp (UTC) |
| `started_at` | datetime | Session start timestamp (UTC) |

### Duration Calculation

```php
// Convert milliseconds from client to seconds for storage
$engagementTimeSec = (int) round($engagementTimeMs / 1000);

// Update session
RecordFactory::session($record)->update([
    'ended_at' => DateTime::getUtc(),
    'duration' => $engagementTimeSec,
]);
```

## Why AJAX Instead of REST API

The batch tracking system exclusively uses WordPress AJAX (`admin-ajax.php`) instead of REST API for several reasons:

| Benefit | Description |
|---------|-------------|
| **Ad blocker compatibility** | REST API endpoints (`/wp-json/...`) are commonly blocked by ad blockers |
| **Simpler architecture** | Single endpoint eliminates conditional logic |
| **Better reliability** | AJAX endpoints are less likely to be blocked by security plugins |
| **FormData support** | Uses `multipart/form-data` which works reliably with `sendBeacon` |

## SPA Navigation Handling

For Single Page Applications (using History API):

1. **On URL change detected:**
   - Flush current engagement data
   - Reset engagement tracker
   - Clear batch queue
   - Re-initialize tracking for new page

2. **History API interception:**
   - `pushState` and `replaceState` are wrapped
   - `popstate` event is monitored

## Custom Events

The batch system also handles custom events:

```javascript
// Queue a custom event
WpStatisticsBatchQueue.add('custom_event', {
  event_name: 'video_play',
  event_data: { video_id: '123', duration: 120 }
});
```

Server-side processing fires WordPress actions:
- `wp_statistics_custom_event_batch`
- `wp_statistics_record_custom_event`

## Configuration

### Client-Side Options

| Option | Default | Description |
|--------|---------|-------------|
| `activityTimeout` | 30 seconds | Time until user considered idle |
| `maxQueueSize` | 10 events | Flush threshold |
| `flushInterval` | 30 seconds | Periodic flush interval |

### Server-Side Requirements

Engagement tracking requires:
- "Record with Cache Compatibility" option enabled (`use_cache_plugin`)
- WordPress AJAX endpoint accessible (`admin-ajax.php`)

## Reliability Features

### sendBeacon Priority

Uses `navigator.sendBeacon()` as primary delivery method:
- Survives page unload
- Non-blocking
- Reliable for exit data

### Fallback Chain

```
1. sendBeacon with FormData
         ↓ (if fails)
2. fetch with FormData + keepalive: true
         ↓ (if fails)
3. Data lost (rare edge case)
```

### Payload Splitting

Large payloads are automatically split:
- Engagement time only sent with first chunk
- Events distributed across chunks
- Prevents exceeding sendBeacon's ~64KB limit

## Metrics Derived from Engagement

| Metric | Calculation |
|--------|-------------|
| Session Duration | `SUM(sessions.duration)` |
| Avg Session Duration | `AVG(sessions.duration)` |
| Time on Page | Derived from individual view durations |
| Bounce Rate | Sessions with `duration < threshold` or single view |

## Related Documentation

- [Database Overview](../database/overview) - Sessions table schema with duration field

---

*Last Updated: 2025-12-07*
