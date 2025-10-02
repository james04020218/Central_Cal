# Telecom Plan Calculator Hub

## Overview

This is a web-based hub application that hosts multiple telecommunication plan calculators for different Korean telecom providers. The application serves as a centralized gateway where users can select and access various calculators for KT, SK Telecom, LG U+, and other service providers including MVNO (Mobile Virtual Network Operator) services.

## System Architecture

### Frontend Architecture
- **Technology Stack**: Pure HTML, CSS, and JavaScript (vanilla JS)
- **CSS Framework**: Tailwind CSS via CDN
- **Font**: Noto Sans KR (Korean font support)
- **Icons**: Font Awesome 6.4.0
- **Responsive Design**: Mobile-first approach with Tailwind's responsive utilities

### Static Web Application
- **Deployment**: Simple Python HTTP server for development
- **File Structure**: Flat file structure with organized directories
- **Navigation**: Client-side routing using JavaScript window.location

## Key Components

### 1. Hub Interface (index.html)
- Main landing page with calculator selection grid
- Card-based layout for different telecom providers
- Responsive design optimized for mobile and desktop
- Loading animations and smooth transitions

### 2. Calculator Pages
- **KT Calculator**: Fully functional bundle discount calculator (primary calculator)
- **Other Calculators**: Placeholder pages with "coming soon" messages
- Consistent design language across all calculator pages
- Navigation back to hub functionality

### 3. Common Assets
- **CSS Styles**: Shared styling in `css/styles.css`
- **JavaScript Utilities**: Common functions in `js/common.js`
- **Navigation**: Unified back-to-hub functionality

### 4. Calculator Types
- KT Bundle Discount Calculator (active)
- SK Telecom Calculator (planned)
- LG U+ Calculator (planned)
- MVNO Calculators for each network (planned)
- Cable TV Calculator (planned)
- Satellite TV Calculator (planned)

## Data Flow

### Navigation Flow
1. User lands on hub page (index.html)
2. User selects a calculator type
3. JavaScript handles navigation to specific calculator
4. Calculator pages provide "back to hub" functionality

### Calculator Interaction
1. User inputs service preferences and requirements
2. JavaScript performs real-time calculations
3. Results displayed dynamically without page refresh
4. Currency formatting and validation handled client-side

## External Dependencies

### CDN Resources
- **Tailwind CSS**: `https://cdn.tailwindcss.com`
- **Google Fonts**: Noto Sans KR font family
- **Font Awesome**: Icon library v6.4.0

### No Backend Dependencies
- Pure client-side application
- No database or server-side processing required
- No authentication or user management needed

## Deployment Strategy

### Development Environment
- **Runtime**: Python 3.11 HTTP server on port 5000
- **Replit Configuration**: Configured for easy deployment and testing
- **Workflow**: Simple shell execution for server startup

### Production Deployment
- **Static Hosting**: Can be deployed to any static hosting service
- **No Build Process**: Direct file serving without compilation
- **Cross-Platform**: Works on any device with modern web browser

### File Organization
```
/
├── index.html (Hub homepage)
├── css/styles.css (Shared styles)
├── js/common.js (Shared JavaScript)
└── calculators/
    ├── kt_calculator.html (Active calculator)
    ├── skt_calculator.html (Placeholder)
    ├── lgu_calculator.html (Placeholder)
    └── [other calculator files]
```

## Changelog
- June 22, 2025: Initial setup
- June 22, 2025: Updated KT calculator with enhanced features (consultation functionality added)
- June 22, 2025: Updated all three calculators (KT, SK, LG) with latest versions and simplified hub to show only main 3 telecom providers

## User Preferences

Preferred communication style: Simple, everyday language.