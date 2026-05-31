# DESIGN SYSTEM: KINETIC INDUSTRIAL

This file serves as the single source of truth for the portfolio project design tokens and layout specifications pulled from the **Industrial Minimalist Portfolio** project via Stitch.

---

## Design Tokens (YAML Schema)

```yaml
name: Kinetic Industrial
colors:
  surface: '#131315'
  surface-dim: '#131315'
  surface-bright: '#39393b'
  surface-container-lowest: '#0e0e10'
  surface-container-low: '#1c1b1d'
  surface-container: '#201f22'
  surface-container-high: '#2a2a2c'
  surface-container-highest: '#353437'
  on-surface: '#e5e1e4'
  on-surface-variant: '#c4c7c8'
  inverse-surface: '#e5e1e4'
  inverse-on-surface: '#313032'
  outline: '#8e9192'
  outline-variant: '#444748'
  surface-tint: '#c6c6c7'
  primary: '#ffffff'
  on-primary: '#2f3131'
  primary-container: '#e2e2e2'
  on-primary-container: '#636565'
  inverse-primary: '#5d5f5f'
  secondary: '#c8c6c9'
  on-secondary: '#303033'
  secondary-container: '#47464a'
  on-secondary-container: '#b6b4b8'
  tertiary: '#ffffff'
  on-tertiary: '#2f3038'
  tertiary-container: '#e3e1ec'
  on-tertiary-container: '#63646c'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#e2e2e2'
  primary-fixed-dim: '#c6c6c7'
  on-primary-fixed: '#1a1c1c'
  on-primary-fixed-variant: '#454747'
  secondary-fixed: '#e4e1e5'
  secondary-fixed-dim: '#c8c6c9'
  on-secondary-fixed: '#1b1b1e'
  on-secondary-fixed-variant: '#47464a'
  tertiary-fixed: '#e3e1ec'
  tertiary-fixed-dim: '#c6c5cf'
  on-tertiary-fixed: '#1a1b22'
  on-tertiary-fixed-variant: '#46464e'
  background: '#131315'
  on-background: '#e5e1e4'
  surface-variant: '#353437'
typography:
  headline-xl:
    fontFamily: Geist
    fontSize: 48px
    fontWeight: '600'
    lineHeight: '1.1'
    letterSpacing: -0.04em
  headline-lg:
    fontFamily: Geist
    fontSize: 32px
    fontWeight: '500'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Geist
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
    letterSpacing: 0em
  body-md:
    fontFamily: Inter
    fontSize: 15px
    fontWeight: '400'
    lineHeight: '1.5'
    letterSpacing: 0em
  mono-sm:
    fontFamily: JetBrains Mono
    fontSize: 13px
    fontWeight: '400'
    lineHeight: '1.4'
    letterSpacing: 0.02em
  label-caps:
    fontFamily: JetBrains Mono
    fontSize: 11px
    fontWeight: '500'
    lineHeight: '1.0'
    letterSpacing: 0.1em
spacing:
  unit: 4px
  gutter: 1px
  margin-mobile: 24px
  margin-desktop: 64px
  section-gap: 128px
```

---

## Brand & Style

This design system is defined by a hyper-minimalist industrial aesthetic, emphasizing structural integrity and high-fidelity precision. It draws from the Bauhaus and Swiss International Style movements, stripped of all decorative excess to focus on pure function and information density.

The target audience is technical professionals, architects, and developers who value efficiency and clarity over visual ornamentation. The UI should feel like a high-end physical instrument: cold, precise, and authoritative. 

Key stylistic pillars include:
- **Brutalist-Lite:** Raw structural elements and visible grids without the "lo-fi" messiness.
- **Monochrome Precision:** A strictly disciplined palette of matte blacks and zinc grays.
- **Asymmetry:** Intentional layout imbalances that guide the eye through functional hierarchies rather than traditional centered patterns.
- **High-Fidelity:** Razor-thin borders and crisp typography that suggest a premium, engineered quality.

---

## Colors

The palette is rooted in a deep matte black (`#131315`) to provide a void-like canvas that eliminates visual noise. Contrast is the primary tool for hierarchy.

- **Primary:** Pure White (`#ffffff`) reserved for critical text and high-priority interactions.
- **Secondary:** Muted Slate/Zinc (`#c8c6c9`) used for secondary elements and container backgrounds.
- **Borders/Outline:** Outline (`#8e9192`) and Outline Variant (`#444748`) represent precise structural borders.
- **Background:** Matte Black (`#131315`) for the primary surface.
- **Surface Elevation:** Low-elevation Zinc (`#1c1b1d`) and container-lowest (`#0e0e10`) for tonal shifts.

---

## Typography

Typography functions as a structural element. We employ a dual-font strategy:
1. **Sans-Serif (Geist / Inter):** Used for headlines and primary body copy. It provides a modern, neutral, and highly legible foundation. Headlines should use tighter tracking to feel "machined."
2. **Monospace (JetBrains Mono):** Used for technical data, labels, UI controls, and structural markers. This reinforces the industrial, "built" nature of the interface.

All labels and secondary metadata should be rendered in monospace to distinguish between content (Sans) and interface/metadata (Mono).

---

## Layout & Spacing

The layout is governed by a rigid, visible 1px grid. 

- **Grid Model:** A fluid grid for desktop with 0px gutters between content blocks, separated only by 1px borders (`outline-variant`).
- **Asymmetry:** Avoid centered layouts. Content should be left-aligned or anchored to the far right to create a dynamic, engineering-blueprint feel.
- **Whitespace:** Use extreme vertical padding (Section Gaps of `128px`) to separate distinct functional areas. Whitespace is not "empty"; it is a tool for focus.
- **Breakpoints:** 
  - Mobile (<768px): Single column, 24px margins.
  - Desktop (>1024px): Multi-column, 64px margins.

---

## Elevation & Depth

This design system rejects shadows and blurs. Depth is achieved through **Tonal Layering** and **Line Work**:

1. **Flat Surface:** All elements exist on the same Z-plane.
2. **Boundary Definition:** Depth is implied through 1px borders (`#444748`). When an element is "active" or "hovered," the border color shifts to White (`#ffffff`).
3. **Contrast Layering:** Use slightly lighter background tones (`#1c1b1d`) to indicate a container or panel, maintaining sharp edges.
4. **No Blurs:** Backgrounds must remain opaque to maintain the industrial, solid-state feel.

---

## Shapes

The geometry of this design system is strictly binary: **90-degree angles only.** 

- **Corners:** No border-radii are permitted. All buttons, inputs, cards, and containers must have sharp, 0px corners.
- **Icons:** Use linear, stroke-based icons with consistent 1px or 1.5px weights (e.g. Material Symbols Outlined with 300 weight).
- **Dividers:** Use 1px solid lines in `outline-variant` (`#444748`) for both horizontal and vertical separation.

---

## Components

### Buttons
- **Primary:** Black background, 1px White border, White text (Mono).
- **Secondary:** Black background, 1px outline border, Gray text (Mono).
- **State:** On hover, the background fills White and text becomes Black. Transition must be instantaneous (0ms or 50ms) to feel mechanical.

### Input Fields
- **Default:** 1px outline-variant bottom-border only or full 1px square frame. Mono typography for input text.
- **Focus:** Border shifts to White. No glow or outer ring.

### Cards & Containers
- Cards are defined by a 1px perimeter border. Headers within cards should be separated by a 1px horizontal line. Use asymmetric padding to maintain the industrial rhythm.

### Lists & Data
- Data rows should have a 1px outline-variant bottom border. 
- Use Monospace for all numeric data.
- Align labels to the left and values to the right for a clean, tabular look.

### Navigation
- Vertical or horizontal navigation with visible 1px dividers.
- Navigation links use lowercase or uppercase monospace text with hover indicators.
