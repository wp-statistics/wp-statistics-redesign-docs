---
title: "Last Touch Attribution"
type: "definition"
category: "visitor-classification"
status: "Need Review"
aliases: ["Last Touch", "Last Interaction Attribution", "Session-Based Attribution"]
---

# Last Touch Attribution

Entry page = actual entry page of each session (default model).

## Definition

Credits the page where visitor actually entered for each specific session. Entry page changes with each new session. Reflects current behavior.

## How It Works

```
Session 1: Enter via Blog Post → Entry = Blog Post
Session 2: Enter via Homepage → Entry = Homepage
Session 3: Enter via Product → Entry = Product

Each session independently attributed
```

## Example Comparison

```
Same Visitor Journey:
- Jan 1: Google → Blog Post
- Jan 15: Direct → Homepage
- Jan 30: Email → Product Page

Last Touch (default):
- 3 different entry pages tracked

First Touch:
- All 3 sessions → entry = Blog Post
```

## Use Cases

- **Current behavior:** Where are visitors entering now?
- **Session analysis:** Session-specific patterns
- **Real-time performance:** Current entry page effectiveness
- **Default choice:** Most intuitive for users

## Unique Entrances

```
Visitor A, Session 1: Homepage → 1 unique entrance
Visitor A, Session 2: Homepage → 0 additional (same visitor-page)
Visitor A, Session 3: Blog Post → 1 unique entrance (new page)
Visitor B, Session 1: Homepage → 1 unique entrance (new visitor)

Homepage unique entrances = 2
Homepage total entrances = 3
```

## Common Misconceptions

**"Last Touch only counts the final session"**
- No. Counts all sessions, each attributed to its actual entry page.

**"Last Touch ignores acquisition sources"**
- True. Shows current behavior, not historical discovery.

---

*Last Updated: 2025-11-24*
