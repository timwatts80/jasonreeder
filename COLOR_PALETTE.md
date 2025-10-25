# Design System Documentation

This project implements a comprehensive design system using **CSS Custom Properties** combined with **Tailwind CSS** for optimal flexibility and maintainability.

## 🎨 Color Palette

### Core Brand Colors
- **Primary**: `#0b2239` - Deep navy blue (main brand color)
- **Accent**: `#c8a96a` - Warm gold (secondary brand color)
- **Background**: `#f9f9f8` - Light neutral background
- **Text**: `#1a1a1a` - Primary text color

### Semantic Color System
- **Primary Foreground**: `#ffffff` - Text on primary backgrounds
- **Accent Foreground**: `#0b2239` - Text on accent backgrounds
- **Muted**: `#ececf0` - Subtle backgrounds
- **Muted Foreground**: `#717182` - Secondary text
- **Card**: `#ffffff` - Card backgrounds
- **Border**: `#0000001a` - Border color (10% opacity black)
- **Destructive**: `#d4183d` - Error/danger states

## ✍️ Typography System

### Font Families
- **Heading Font**: Poppins (Google Fonts)
- **Body Font**: Inter (Google Fonts)

### Typography Hierarchy
| Element | Font Size | Font Family | Weight | Line Height | Usage |
|---------|-----------|-------------|---------|-------------|-------|
| **H1** | 48px | Poppins | Semibold (600) | 1.2 | Page titles, hero headings |
| **H2** | 24px | Inter | Regular (400) | 1.3 | Section headings |
| **H3** | 16px | Poppins | Semibold (600) | 1.4 | Subsection titles |
| **P** | 16px | Inter | Regular (400) | 1.6 | Body text, paragraphs |

### Font Weights
- **Normal**: 400 - Regular text
- **Medium**: 500 - Emphasized text
- **Semibold**: 600 - Headings and strong emphasis

## Spacing System

- **XS**: 4px
- **SM**: 8px
- **MD**: 16px
- **LG**: 24px
- **XL**: 48px
- **2XL**: 80px
- **Section**: 80px (for section padding)

## Layout

- **Max Width**: 1200px (container width)
- **Border Radius**: 0.625rem (10px)

## Usage in Tailwind

### Colors
```html
<!-- Primary colors -->
<div class="bg-primary text-primary-foreground">Primary button</div>
<div class="bg-primary-800">Darker primary</div>
<div class="bg-primary-200">Lighter primary</div>

<!-- Accent colors -->
<div class="bg-accent text-accent-foreground">Accent button</div>
<div class="bg-accent-600">Darker accent</div>

<!-- Neutral colors -->
<div class="bg-background text-foreground">Main content</div>
<div class="bg-muted text-muted-foreground">Secondary content</div>
```

### Typography
```html
<!-- Headings -->
<h1 class="font-heading text-h1">Main heading</h1>
<h2 class="font-heading text-h2">Section heading</h2>

<!-- Body text -->
<p class="text-body">Regular paragraph text</p>
<p class="text-body text-muted-foreground">Secondary text</p>
```

### Components
```html
<!-- Buttons -->
<button class="btn-primary">Primary Button</button>
<button class="btn-secondary">Secondary Button</button>

<!-- Cards -->
<div class="card">Card content</div>

<!-- Containers -->
<div class="container">Centered container with max-width</div>
<section class="section">Section with standard padding</section>
```

## CSS Custom Properties

All colors and design tokens are available as CSS custom properties:

```css
/* Colors */
--color-primary: #0b2239;
--color-accent: #c8a96a;
--color-bg: #f9f9f8;
--color-text: #1a1a1a;

/* Typography */
--font-heading: "Poppins", sans-serif;
--font-body: "Inter", sans-serif;
--font-size-h1: 48px;
--font-size-h2: 32px;
--font-size-body: 18px;

/* Spacing */
--spacing-xs: 4px;
--spacing-sm: 8px;
--spacing-md: 16px;
--spacing-lg: 24px;
--spacing-xl: 48px;
--spacing-2xl: 80px;

/* Layout */
--max-width: 1200px;
--section-padding: 80px;
--radius: 0.625rem;
```

## Accessibility

- All color combinations meet WCAG AA contrast requirements
- Focus states use the ring color (`#0b2239`)
- Semantic color usage for destructive actions
- Consistent color hierarchy throughout the design system

## Development Notes

- Colors are defined in both Tailwind config and CSS custom properties for maximum flexibility
- Google Fonts are loaded for optimal typography
- The system supports both utility classes and custom CSS approaches
- All colors have appropriate shade variants (50-950) for design flexibility