---
name: tickettrade-brand-guidelines
description: Applies TicketTrade's official dark-mode, high-performance visual identity. Use this skill when generating UI components, styling waitlist pages, or establishing the visual design language for the ticketing platform. The aesthetic is heavily inspired by ultra-clean, modern, minimalist mobile OS interfaces.
license: Internal Use Only
---

# TicketTrade Brand Styling

## Overview

To access TicketTrade's official brand identity and Tailwind-optimized style resources, use this skill. The brand focuses on speed, trust, and the energy of live sports and concerts. 

**Keywords**: mobile-first, dark mode, high contrast, minimalistic UI, premium tech, sports ticketing, fan-to-fan, Tailwind CSS, modern typography

## Brand Guidelines

### Colors

**Core Interface (Dark Theme Default):**
- **Deep Background (`#09090b`)**: The primary canvas. Not quite true black, but an ultra-dark zinc that reduces eye strain while looking incredibly premium.
- **Surface/Card Background (`#18181b`)**: Used for ticket listings, input fields, and elevated UI elements.
- **Primary Text (`#fafafa`)**: Pure clarity for headings and vital information.
- **Muted Text/Borders (`#71717a`)**: For secondary information (e.g., date, venue) and subtle dividers.

**Accent Colors (The "Action" Palette):**
- **Pitch Green (`#10b981`)**: Primary accent. Represents the football pitch, the "verified" checkmark, and successful transactions. Use for primary call-to-action buttons (like "Join Waitlist").
- **Stadium Blue (`#3b82f6`)**: Secondary accent. Represents technology and trust. Use for links, loading states, and active tabs.
- **Urgency Red (`#ef4444`)**: Tertiary accent. Use sparingly for high-tension elements like "Only 2 tickets left" or "Selling fast."

### Typography

- **Primary Font Family**: `Inter` (with `-apple-system, BlinkMacSystemFont, system-ui` fallbacks). 
- **Headings**: Heavy, tightly tracked (letter-spacing: -0.02em) to look punchy and modern. 
- **Body Text**: Clean, highly legible at small sizes for mobile screens. 
- **Note**: **Do not use serif fonts.** The entire interface must remain strictly sans-serif to maintain a sleek, native-app feel.

## Features

### Smart Font Application
- Applies bold `Inter` to all headings (H1, H2, H3).
- Applies regular `Inter` to body text and forms.
- Automatically leverages system-native fonts (San Francisco on Apple devices) for optimal performance and zero layout shift.

### UI Component Styling
- **Buttons**: Fully rounded (pill shape) or heavily rounded corners (e.g., `rounded-xl` in Tailwind) to match modern OS standards.
- **Shadows/Glows**: Instead of heavy drop shadows, use subtle colored glows behind primary buttons using the accent colors to make them "pop" off the dark background.
- **Inputs**: Transparent backgrounds with subtle gray borders that illuminate with the Pitch Green accent color when focused.

## Technical Details

### Implementation for AI Agents
- When generating React/Next.js components, map these hex codes directly to Tailwind CSS utility classes (e.g., `bg-zinc-950`, `text-emerald-500`, `font-sans`).
- Ensure all contrast ratios pass accessibility standards, specifically prioritizing the legibility of ticket prices and event times.