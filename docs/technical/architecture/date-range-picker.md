---
title: "Date Range Picker & Period Comparison"
type: "technical"
category: "architecture"
status: "Done"
sidebar_position: 6
---

# Date Range Picker & Period Comparison

This document defines the architecture for the date range picker component and period comparison feature in WP Statistics v15.

## Overview

The date picker allows users to select date ranges and compare metrics across time periods. The architecture follows a frontend/backend split where the UI handles selection and the backend handles comparison logic.

## Recommended Library

**[johnpolacek/date-range-picker-for-shadcn](https://github.com/johnpolacek/date-range-picker-for-shadcn)**

| Criteria | Details |
|----------|---------|
| Framework | React + TypeScript |
| Styling | Tailwind CSS + shadcn/ui |
| Dependencies | react-day-picker v9, date-fns, Radix UI |
| License | MIT |
| Demo | [Live Demo](https://date-range-picker-for-shadcn-demo.vercel.app/) |

### Why This Library?

1. Built specifically for shadcn/ui (matches our component system)
2. Has built-in comparison mode for two date ranges
3. Includes preset date ranges out of the box
4. Copy-paste philosophy - we own the code and can customize
5. TypeScript-first with full type safety

### Installation

```bash
npx shadcn-ui@latest add button calendar label popover switch
npm install @radix-ui/react-icons date-fns
```

---

## Architecture

### Frontend/Backend Split

```
┌─────────────────────────────────────────────────────────────┐
│                        FRONTEND                              │
│  Date Picker sends to API:                                  │
│  - Primary range: { from: "2025-01-01", to: "2025-01-07" }  │
│  - Compare mode: "previous_period" | "year_over_year" | ... │
│  - Match type: "day_of_week" | "exact_date"                 │
└─────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────┐
│                        BACKEND                               │
│  Calculates actual comparison dates based on:               │
│  - Match type logic                                         │
│  - Applies to database queries                              │
│  Returns: Both primary and comparison datasets              │
└─────────────────────────────────────────────────────────────┘
```

### Why Backend Handles Comparison Logic?

| Reason | Benefit |
|--------|---------|
| Single source of truth | Logic is consistent across all clients |
| API consumers | Mobile apps, third-party integrations get same behavior |
| Database optimization | Backend can optimize queries for both ranges |
| Maintainability | Change logic once, works everywhere |

---

## Comparison Modes

### 1. Previous Period

Compares the selected range to the same length of time immediately before it.

**Example:** If user selects "Last 7 days" (Dec 7-13), compare to Dec 1-6.

### 2. Year Over Year

Compares the selected range to the same period one year ago.

**Example:** If user selects Jan 1-7, 2025, compare to Jan 1-7, 2024.

### 3. Custom Period

User manually selects both the primary and comparison date ranges.

---

## Matching Strategies

Based on [Plausible Analytics](https://plausible.io/docs/compare-stats) approach.

### Match Day of Week (Default)

Aligns comparison by day of week to avoid weekend/weekday discrepancies.

**Example:**
- Primary: Sunday Jan 1 to Saturday Jan 7, 2023
- Year over year with "Match exact date": Saturday Jan 1 to Friday Jan 7, 2022
- Year over year with "Match day of week": Sunday Jan 2 to Saturday Jan 8, 2022

The second approach ensures both periods have the same distribution of weekdays.

### Match Exact Date

Compares identical calendar dates regardless of day of week.

---

## TypeScript Interfaces

### Date Range State

```typescript
interface DateRange {
  from: Date;
  to: Date;
}

interface DateRangePickerState {
  range: DateRange;
  compareRange?: DateRange;
  compareEnabled: boolean;
  compareMode: CompareMode;
  matchType: MatchType;
  preset?: PresetKey;
}

type CompareMode = 'previous_period' | 'year_over_year' | 'custom';
type MatchType = 'day_of_week' | 'exact_date';
```

### API Request

```typescript
interface AnalyticsQueryWithComparison {
  // ... existing query fields
  date_from: string;
  date_to: string;

  // Comparison fields
  compare?: boolean;
  compare_mode?: CompareMode;
  compare_from?: string;  // Only for custom mode
  compare_to?: string;    // Only for custom mode
  match_type?: MatchType;
}
```

### API Response

```typescript
interface AnalyticsResponseWithComparison {
  success: boolean;
  data: {
    rows?: Array<Record<string, any>>;
    totals: Record<string, any>;
  };
  meta: {
    date_from: string;
    date_to: string;

    // Comparison metadata
    compare_from?: string;  // Actual calculated dates
    compare_to?: string;    // After match logic applied

    total_rows: number;
    cached: boolean;
    cache_ttl: number;
  };
}
```

---

## Presets Configuration

| Key | Label | Description |
|-----|-------|-------------|
| `today` | Today | Current day only |
| `yesterday` | Yesterday | Previous day |
| `last7` | Last 7 days | Past 7 days including today |
| `last14` | Last 14 days | Past 14 days including today |
| `last30` | Last 30 days | Past 30 days including today |
| `thisWeek` | This week | Current week (Monday-Sunday) |
| `lastWeek` | Last week | Previous week |
| `thisMonth` | This month | Current calendar month |
| `lastMonth` | Last month | Previous calendar month |
| `thisYear` | This year | Current calendar year |
| `last12Months` | Last 12 months | Past 12 months |
| `custom` | Custom | User-defined range |

### Preset Implementation

```typescript
type PresetKey =
  | 'today'
  | 'yesterday'
  | 'last7'
  | 'last14'
  | 'last30'
  | 'thisWeek'
  | 'lastWeek'
  | 'thisMonth'
  | 'lastMonth'
  | 'thisYear'
  | 'last12Months'
  | 'custom';

interface Preset {
  key: PresetKey;
  label: string;
  getRange: () => DateRange;
}

const PRESETS: Preset[] = [
  {
    key: 'today',
    label: 'Today',
    getRange: () => ({
      from: startOfDay(new Date()),
      to: endOfDay(new Date())
    })
  },
  {
    key: 'last7',
    label: 'Last 7 days',
    getRange: () => ({
      from: subDays(new Date(), 6),
      to: new Date()
    })
  },
  // ... etc
];
```

---

## React Integration

### Date Range Context

```typescript
interface DateRangeContextValue {
  range: DateRange;
  compareRange?: DateRange;
  compareEnabled: boolean;
  compareMode: CompareMode;
  matchType: MatchType;
  setRange: (range: DateRange) => void;
  setCompareEnabled: (enabled: boolean) => void;
  setCompareMode: (mode: CompareMode) => void;
  setMatchType: (type: MatchType) => void;
  applyPreset: (preset: PresetKey) => void;
}

const DateRangeContext = createContext<DateRangeContextValue | null>(null);
```

### Custom Hook

```typescript
function useDateRange() {
  const context = useContext(DateRangeContext);
  if (!context) {
    throw new Error('useDateRange must be used within DateRangeProvider');
  }
  return context;
}
```

### Integration with Analytics Query

```typescript
function useAnalyticsWithDateRange(query: Omit<AnalyticsQuery, 'date_from' | 'date_to'>) {
  const { range, compareEnabled, compareMode, matchType } = useDateRange();

  return useAnalytics({
    ...query,
    date_from: format(range.from, 'yyyy-MM-dd'),
    date_to: format(range.to, 'yyyy-MM-dd'),
    compare: compareEnabled,
    compare_mode: compareEnabled ? compareMode : undefined,
    match_type: compareEnabled ? matchType : undefined,
  });
}
```

---

## Backend Implementation (PHP)

### Comparison Date Calculation

```php
class DateComparisonCalculator {

    public function getComparisonDates(
        DateTime $from,
        DateTime $to,
        string $mode,
        string $matchType
    ): array {
        switch ($mode) {
            case 'previous_period':
                return $this->getPreviousPeriod($from, $to);

            case 'year_over_year':
                return $this->getYearOverYear($from, $to, $matchType);

            case 'custom':
                // Custom dates provided by frontend
                return null;

            default:
                return null;
        }
    }

    private function getPreviousPeriod(DateTime $from, DateTime $to): array {
        $daysDiff = $from->diff($to)->days + 1;

        $compareFrom = (clone $from)->modify("-{$daysDiff} days");
        $compareTo = (clone $from)->modify('-1 day');

        return [$compareFrom, $compareTo];
    }

    private function getYearOverYear(
        DateTime $from,
        DateTime $to,
        string $matchType
    ): array {
        $compareFrom = (clone $from)->modify('-1 year');
        $compareTo = (clone $to)->modify('-1 year');

        if ($matchType === 'day_of_week') {
            // Adjust to match same day of week
            $fromDayOfWeek = (int) $from->format('N');
            $compareDayOfWeek = (int) $compareFrom->format('N');
            $dayDiff = $fromDayOfWeek - $compareDayOfWeek;

            if ($dayDiff !== 0) {
                $compareFrom->modify("+{$dayDiff} days");
                $compareTo->modify("+{$dayDiff} days");
            }
        }

        return [$compareFrom, $compareTo];
    }
}
```

---

## Component Structure

```
components/
├── ui/
│   ├── date-range-picker.tsx    # Main picker component
│   ├── date-input.tsx           # Direct date input field
│   └── calendar.tsx             # shadcn calendar (base)
├── DateRangeProvider.tsx        # Context provider
└── hooks/
    ├── useDateRange.ts          # Context hook
    └── useAnalyticsWithDateRange.ts
```

---

## Related Documentation

- [Analytics Query Frontend](../frontend/architecture/analytics-query-frontend.md)
- [Analytics Query Backend](./analytics-query-backend.md)
- [Analytics Query API](../api-endpoints/analytics-query-api.md)

## External References

- [johnpolacek/date-range-picker-for-shadcn](https://github.com/johnpolacek/date-range-picker-for-shadcn)
- [Plausible Compare Stats](https://plausible.io/docs/compare-stats)
- [react-day-picker Documentation](https://daypicker.dev/)
- [shadcn/ui Date Picker](https://ui.shadcn.com/docs/components/date-picker)

---

*Last Updated: 2025-12-13*
