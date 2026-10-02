🎬 Your Reel section should work like this
             INSTAGRAM REELS

   ┌──────────┐   ┌────────────────────┐   ┌──────────┐
   │          │   │                    │   │          │
   │  PREV    │   │     ACTIVE REEL    │   │   NEXT   │
   │          │   │                    │   │          │
   │          │   │       ▶ VIDEO      │   │          │
   │          │   │                    │   │          │
   └──────────┘   └────────────────────┘   └──────────┘
                    ● ○ ○ ○ ○

The important difference from Hotstar
Hotstar's screenshot has the main card toward one side, but yours should have the active Reel perfectly centered.
For example:
        previous             ACTIVE              next
      ┌──────────┐      ┌──────────────┐      ┌──────────┐
      │          │      │              │      │          │
      │   30%    │      │    100%      │      │   30%    │
      │ visible  │      │    REEL      │      │ visible  │
      │          │      │              │      │          │
      └──────────┘      └──────────────┘      └──────────┘

That will look much more premium on your website.
🔥 How I would make the animation
1. Automatic Reel rotation
Every 5–7 seconds:
Reel 1
   ↓
Reel 2
   ↓
Reel 3
   ↓
Reel 4
   ↓
Reel 1

The active video:
- automatically plays
- muted
- loops
- pauses when it leaves the center
- next video becomes active when it reaches the center
2. Smooth transition
Don't use a simple display: none.
Instead:
Previous Reel
    ↓
moves left + scale down + opacity

Active Reel
    ↓
moves to center + scale 1

Next Reel
    ↓
moves from right → center

Something like:
Before

[ PREV ]    [ ACTIVE ]    [ NEXT ]

After

             [ ACTIVE ]    [ NEXT ]    [ NEXT ]

The movement should be slow and buttery, not a fast slider.
3. Side Reels should be visible
This is very important.
Don't make the side cards only 5–10% visible.
Desktop:
Previous ≈ 22–28%
Active    ≈ 44–50%
Next      ≈ 22–28%

So users immediately understand:
There is more content →

That also makes the section feel interactive.
🎨 Adapt it to your dark premium theme
Your existing colors:
Background     #0A0A0A
Section        #111111
Card           #181818
Text           #F5F5F0
Secondary      #A3A3A3
Border         #292929
Gold           #C6A15B
Gold Hover     #D8B875

Don't copy Hotstar's colorful blue/purple background.
Instead:
Section
#0A0A0A
Active Reel
Black/dark card with subtle #292929 border.
Side Reels
Slightly darker + opacity: 0.45–0.65.
Active indicator
Gold:
#C6A15B
🎥 Reel card
I'd make the active Reel approximately 9:16, because Instagram Reels are vertical.
For desktop:
width: 360–430px
aspect-ratio: 9 / 16
border-radius: 18–24px

But don't make it a boring rounded rectangle.
Add a subtle cinematic shadow.
At the bottom:
┌──────────────────────────┐
│                          │
│       REAL VIDEO         │
│                          │
│                          │
│  ▶  Travel Vlog          │
│     1.2M views           │
└──────────────────────────┘

Keep the information minimal.
📱 Mobile
On mobile, change it to:
     ┌────────────────┐
     │                │
     │   ACTIVE REEL  │
     │                │
     │                │
     └────────────────┘
      ◀              ▶

Show only a small amount of the previous/next Reel on the edges.
Users can swipe naturally.
🧠 Technical implementation
Since you're already using React + TypeScript, I'd build this as:
React
TypeScript
Tailwind
Framer Motion

Component:
InstagramReels.tsx

Data:
reels.ts

Example:
interface Reel {
  id: string;
  title: string;
  videoUrl: string;
  thumbnail: string;
  instagramUrl: string;
  views?: string;
}

Then the carousel controls which video is active.
For animation
Use Framer Motion:
- AnimatePresence
- motion.div
- useMotionValue
- useTransform
- drag/swipe
- spring transitions
That will give you the soft movement you were asking about earlier, rather than copying the CodePen timeline code.
⭐ One more thing I'd add
Above the carousel:
LATEST FROM INSTAGRAM
Then on the right:
View Instagram ↗
And below the carousel:
        ●  ○  ○  ○  ○

Gold active dot, muted dots. 