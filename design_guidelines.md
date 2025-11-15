# Design Guidelines: Solomon Oluwatosin Portfolio

## Design Approach
**Reference-Based Approach**: Drawing inspiration from minimal portfolio leaders like Linear, Stripe, and Basecamp's personal sites, combined with builder/maker aesthetic from Replit community showcases. This type-first, warm approach prioritizes personality and readability.

## Core Design Principles
1. **Type-Driven Minimalism**: Typography as the primary design element
2. **Warm Builder Vibes**: Friendly, approachable yet professional
3. **Generous Breathing Room**: Spacious layouts that let content shine
4. **Subtle Motion**: Smooth, purposeful animations that enhance (never distract)

---

## Typography System

**Primary Font**: Satoshi or Inter (rounded sans-serif)
- Hero/H1: 3.5rem (56px) - font-bold
- H2/Section Headers: 2.25rem (36px) - font-semibold
- H3/Project Titles: 1.5rem (24px) - font-medium
- Body: 1.125rem (18px) - font-normal, line-height relaxed (1.7)
- Small/Meta: 0.875rem (14px) - font-normal

**Accent Font**: JetBrains Mono or similar mono for tags, labels, subtle accents

---

## Color Palette

**Base Colors**:
- Brown/Warm neutral base tones
- Soft off-white backgrounds
- Warm accent: Amber or soft violet for CTAs and highlights

**Application**:
- Backgrounds: Warm whites and creams
- Text: Deep brown for primary, muted brown for secondary
- Accents: Amber/violet for buttons, links, hover states
- Borders: Subtle brown tints for dividers

---

## Layout System

**Spacing Units**: Tailwind units of 4, 8, 12, 16, 20, 24, 32 (p-4, m-8, gap-12, py-16, etc.)

**Container Widths**:
- Maximum content width: max-w-6xl (1152px)
- Text content: max-w-3xl for optimal readability
- Full-width sections with inner containers

**Grid System**:
- Projects: 2-column on desktop (lg:grid-cols-2), single on mobile
- Mosaic gallery: 3-4 columns with varied heights
- Responsive breakpoints: mobile-first approach

---

## Section Designs

### Hero/About Section
**Layout**: Two-column split
- **Left Column**: 
  - Headline: "Hey, I'm Solomon Oluwatosin — a Replit expert who loves building beautiful, useful things on the web."
  - Subtext: "I turn ideas into interactive, shareable, and scalable projects — one Repl at a time."
  - Spacing: py-20 to py-32
  
- **Right Column**: 
  - Circular frame (300-400px diameter) containing provided photo
  - Subtle shadow or border treatment
  - Positioned to align vertically with text

**Visual Treatment**: Clean, airy, with smooth fade-in animation on load

### Work/Projects Section
**Featured Projects (3-5 items)**:
- Card-based layout with mock device frames showing project previews
- Each card: Project image/preview, title, short description, tech tags
- Hover state: Subtle lift with shadow, reveal additional details
- Tags displayed as pills using mono accent font

**Mosaic Gallery Grid**:
- Variable height grid (masonry-style or CSS Grid)
- Hover reveals project name and brief blurb overlay
- Smooth transitions between states
- Use gap-6 to gap-8 for spacing

### Contact Section
**Layout**: Centered, single-column form
- Simple, friendly copy: "Want to build something together? Let's make it fun."
- Form fields: Name, Email, Message (generous padding, rounded corners)
- Submit button with warm accent color
- Social icons row below: Replit, GitHub, LinkedIn, Email (consistent sizing, hover lift)
- "Download One-Pager PDF" button with document icon

---

## Component Library

### Buttons
- Primary: Warm accent background, white text, rounded-lg, px-8 py-3
- Secondary: Outlined with warm accent, rounded-lg
- Hover: Slight scale (1.02) and shadow increase
- When on images: Backdrop blur background (backdrop-blur-md bg-white/20)

### Cards
- Project cards: Rounded borders, subtle shadow, white/cream background
- Padding: p-6 to p-8
- Hover: Transform scale (1.02), shadow increase

### Form Inputs
- Rounded corners (rounded-lg)
- Border: Subtle brown tint
- Focus state: Warm accent border
- Generous padding: px-4 py-3
- Placeholder text: Muted brown

### Navigation (if needed)
- Clean, minimal header
- Links with underline animation on hover
- Sticky or fixed positioning optional

---

## Animations & Interactions

**Use Framer Motion for**:
- Section fade-ins on scroll (fade up from opacity 0)
- Stagger children animations for project cards
- Smooth page transitions
- Hover states on cards (subtle scale + shadow)

**Animation Timing**: 
- Duration: 0.4-0.6s
- Easing: Smooth cubic-bezier curves
- Avoid excessive motion - keep subtle and purposeful

---

## Images

**Hero Section**: Provided professional photo of Solomon in circular frame (right side of hero)

**Project Section**: 
- Mock device frames showing project interfaces
- Placeholder project screenshots (can be AI-generated or abstract visuals based on project theme)
- Mosaic gallery with varied project visuals

**Favicon**: Abstract geometric or initials-based icon in brand colors

**Social Share Image**: Clean card design with name, title, and brand colors

---

## Responsive Behavior

**Mobile** (< 768px):
- Single column throughout
- Circular photo stacks above text in hero
- Project cards stack vertically
- Reduce spacing units by 25-50%

**Tablet** (768px - 1024px):
- Maintain two-column hero
- Projects in 2-column grid
- Comfortable spacing

**Desktop** (> 1024px):
- Full layout as described
- Maximum container widths applied
- Generous whitespace

---

## Accessibility & Performance
- ARIA labels on all interactive elements
- Semantic HTML structure
- Keyboard navigation support
- Alt text for all images
- Target Lighthouse score: 90+
- Load time: < 2s

---

## Special Features

**Easter Egg**: Hidden playful element (e.g., konami code trigger, click counter on avatar, subtle animation on specific interaction) that reflects builder personality

**Dark Mode** (Stretch): Toggle with smooth color transitions, maintaining warm tone with darker browns and amber accents

**PDF One-Pager**: Button triggers download of elegantly designed PDF with abstract cover art using brand colors, contact QR code, project highlights