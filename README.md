DM Reel Stack – MVP

##  Live Demo
[Click here to try ](https://dm-reel-stack-mvp.vercel.app)
##  Demo Video

[ Watch the 1-minute product demo](https://drive.google.com/file/d/1ANIgrgKgDe04msA-Z94f1CwDslPF2ezz/view)


A context-aware Reel consumption experience where Instagram Reels shared in Direct Messages (DMs) play sequentially inside the chat, instead of redirecting users to the global Reels feed.
This MVP demonstrates how a small UX shift can significantly improve conversation continuity, engagement, and social intent.

Problem:

Today on Instagram:

Friends frequently send multiple Reels in DMs
Tapping a Reel opens the global Reels feed
Users must repeatedly go back to the chat to open the next Reel
The conversation context is lost

This creates friction, breaks flow, and weakens the social experience of sharing content.

Solution — DM Reel Stack

When a Reel inside a DM is tapped:
Only Reels from that specific chat are shown
Reels play one after another in a vertical, scrollable stack
Playback starts from the tapped Reel
Exiting returns the user to the same chat

The result: continuous, private, conversation-aware viewing.

Key Features

-Context-aware Reel playback (DM-only feed)
-Vertical sequential scrolling (no algorithmic feed leakage)
-Auto-play / pause based on visibility
-Original send order preserved
-One-tap return to chat
-Instagram-like UI, spacing, and motion

Product Thinking

This feature:

Increases DM engagement time
Reduces unnecessary navigation
Encourages sending multiple Reels
Strengthens the social layer of Reels

This is a UX-level innovation, not an algorithm change — making it low-risk and high-impact to ship.

Tech Stack

-HTML5
-CSS3 (design tokens, layout system, animations)
-Vanilla JavaScript
-No frameworks (intentional — demonstrates core frontend fundamentals)

How It Works (High-Level)

Reels sent in a chat are stored as messages referencing Reel objects
When one Reel is tapped:
All Reel messages from that chat are collected
A Reel Stack is created from those IDs
The UI switches to a vertical feed scoped only to that chat
Exiting restores the previous DM state

This mirrors how internal product prototypes are built at scale.

How to Run

Clone or download the project
Open index.html in a modern browser (Chrome recommended)
Tap any Reel in the chat
Scroll to view Reels sequentially
Tap back to return to the chat

Potential Extensions

React to a Reel and sync it back to the chat
Reply to a specific Reel inside the stack
“Seen” indicators per Reel
Mixed media stacks (Reels + images + videos)
A/B testing vs current Instagram DM Reel flow

MVP Scope

This is a product MVP, not a full Instagram clone.
Data is mocked
No backend is included
The focus is on UX behavior and interaction design

Conclusion

DM Reel Stack re-centers Reel consumption around why content is shared in the first place: conversation.

By keeping Reels inside DMs, the experience becomes more social, fluid, and intentional — not just algorithmic.
