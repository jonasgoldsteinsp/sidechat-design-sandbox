# Sidechat Design System

**Night Operator Edition**

A comprehensive design system following Apple Human Interface Guidelines, powered by retro-computing aesthetics and the Night Operator dark theme.

![Version](https://img.shields.io/badge/version-1.0.0-mint)
![Next.js](https://img.shields.io/badge/Next.js-15-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)
![Tailwind](https://img.shields.io/badge/Tailwind-4-cyan)

## 🎨 Features

- **20+ Color Tokens** - Primary, semantic, and dark mode palettes
- **3 Font Families** - Fraunces (Display), Courier Prime (Mono), VT323 (Pixel)
- **30+ Components** - Production-ready, fully accessible
- **Design Tokens** - JSON format for multi-platform use
- **4 Breakpoints** - Responsive from mobile to wide desktop
- **WCAG AAA** - Accessibility built-in

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the design system.

## 📚 Documentation

- **Foundations** - Color system, typography, spacing, layout grid
- **Components** - 30+ components with variants and states
- **Patterns** - Page templates and user flow examples
- **Tokens** - Design tokens for developer handoff
- **Docs** - Implementation guide and best practices

## 🧩 Component Categories

### Navigation
- Header, Sidebar, Breadcrumb, Tabs

### Input
- Button, TextField, Checkbox, Toggle, Select, Radio

### Feedback
- Badge, Alert, Toast, Modal, Progress Bar, Spinner

### Data Display
- Card, Table, List, Stats

### Media
- Avatar, Image Container

### Layout
- Container, Grid, Stack

## 🎯 Design Principles

1. **Warm & Intelligent** - Editorial warmth meets machine precision
2. **Tactile & Responsive** - Physical interactions with clear feedback
3. **Retro-Futuristic** - Early computing optimism, modern intelligence

## 🛠️ Tech Stack

- **Next.js 15** - React framework with App Router
- **React 19** - Latest React with Server Components
- **TypeScript** - Type-safe development
- **Tailwind CSS v4** - Utility-first CSS framework
- **Design Tokens** - Cross-platform design system tokens

## 📦 Project Structure

```
src/
├── app/                    # Next.js pages
│   ├── foundations/        # Color, typography, spacing
│   ├── components/         # Component library
│   ├── patterns/           # Design patterns
│   ├── tokens/             # Token documentation
│   └── docs/               # Implementation guide
├── components/             # React components
│   ├── input/              # Form inputs
│   ├── feedback/           # User feedback
│   ├── data-display/       # Data visualization
│   ├── media/              # Media components
│   ├── layout/             # Layout utilities
│   └── navigation/         # Navigation components
└── lib/                    # Utilities and tokens
    ├── tokens.ts           # Design tokens (TypeScript)
    └── tokens.json         # Design tokens (JSON)
```

## 🎨 Color Palette

### Primary
- **Mint** `#38C798` - Brand primary, actions, success
- **Ink** `#0F0F0F` - Primary text, buttons
- **Canvas** `#F4F1E6` - Light backgrounds

### Accents
- **Coral** `#C05621` - Error, destructive
- **Cobalt** `#2B6CB0` - Info, links
- **Plum** `#6B3FA0` - Premium features
- **Amber** `#D4A72C` - Warning, pending

### Night Operator (Dark Mode)
- Background: `#0F0F0F`
- Surface: `rgba(255,255,255,0.04)`
- Border: `rgba(255,255,255,0.06)`
- Text: `#F4F1E6`

## 🔤 Typography

- **Display** - Fraunces (300, 400, 600, 700)
- **Body** - Courier Prime (400, 700)
- **System** - VT323 (400)

## 📐 Spacing Scale

Based on 4px increments: `4px, 8px, 16px, 24px, 32px, 48px, 64px, 96px, 128px`

## 🌐 Browser Support

- Chrome (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Edge (last 2 versions)

## ♿ Accessibility

All components meet WCAG 2.1 Level AA standards minimum:
- Keyboard navigation support
- Screen reader friendly
- Proper ARIA labels
- Focus indicators
- Color contrast ratios tested

## 📝 License

MIT

## 🙏 Acknowledgments

- Inspired by [Apple Human Interface Guidelines](https://developer.apple.com/design/human-interface-guidelines)
- Retro-computing aesthetics from early personal computers
- Design tokens following [W3C Design Tokens Community Group](https://www.w3.org/community/design-tokens/)

---

Built with ❤️ for the Sidechat team • v1.0 • February 2026
