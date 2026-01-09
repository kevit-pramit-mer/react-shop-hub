# ShopHub Accessibility Features

## Overview
ShopHub is fully accessible and WCAG 2.1 Level AA compliant, ensuring all users can navigate and use the e-commerce platform effectively.

---

## How to Access

### Accessibility Widget
1. **Click** the floating blue/purple gradient button with "A" badge (bottom-right corner)
2. **OR** Press **Alt + A** keyboard shortcut
3. Panel opens with all customization options

---

## Available Settings

### 1. Font Size Adjustment
Choose from 4 font sizes:
- **Small** (14px) - Compact view
- **Normal** (16px) - Default size
- **Large** (18px) - Enhanced readability
- **X-Large** (20px) - Maximum accessibility

**How it works:** Adjusts root font size, affecting all text site-wide

### 2. Contrast Mode
- **Normal** - Standard color scheme (4.5:1 contrast ratio)
- **High Contrast** - Enhanced borders and text weight (7:1+ contrast ratio)

**Use case:** Beneficial for users with low vision or color blindness

### 3. Reduce Motion
- **OFF** - Full animations enabled
- **ON** - Minimal/instant transitions

**Use case:** Helps users with vestibular disorders or motion sensitivity

### 4. Focus Highlight
- **OFF** - Standard focus indicators
- **ON** - Enhanced 3px blue outline with 4px shadow

**Use case:** Makes keyboard navigation more visible

### 5. Keyboard Navigation
- **OFF** - Disabled keyboard shortcuts
- **ON** - Full keyboard navigation enabled

---

## Keyboard Shortcuts

| Shortcut | Action |
|----------|--------|
| `Alt + A` | Toggle accessibility panel |
| `Tab` | Navigate forward through interactive elements |
| `Shift + Tab` | Navigate backward |
| `Enter` | Activate buttons/links |
| `Space` | Activate buttons, check checkboxes |
| `Esc` | Close modals, panels, dropdowns |
| `Arrow Keys` | Navigate within select dropdowns |

---

## Navigation Features

### Skip to Content
- Press `Tab` on page load
- "Skip to main content" link appears
- Press `Enter` to jump directly to page content (bypasses navbar)

### Focus Management
- Visible focus indicators on all interactive elements
- Logical tab order (left-to-right, top-to-bottom)
- Focus trapped in modals when open
- Focus restored when closing modals

---

## Screen Reader Support

### Optimized For:
- NVDA (Windows)
- JAWS (Windows)
- VoiceOver (macOS, iOS)
- TalkBack (Android)

### Features:
- **Semantic HTML:** Proper use of `<nav>`, `<main>`, `<footer>`, `<article>`, `<section>`
- **ARIA Labels:** All buttons, links, and interactive elements have descriptive labels
- **Heading Hierarchy:** Logical h1 → h6 structure
- **Alt Text:** Descriptive alternative text for all images
- **Form Labels:** All form inputs properly associated with labels
- **Live Regions:** Screen readers announce important updates (cart additions, errors)
- **Skip Links:** Allow bypassing repetitive content

---

## Mobile Accessibility

### Touch Targets
- Minimum 44x44px touch targets on mobile devices
- Adequate spacing between interactive elements
- Hover states converted to tap states on touch devices

### Responsive Design
- Text remains readable at 200% zoom
- No horizontal scrolling required
- Mobile-optimized navigation (hamburger menu)

---

## Visual Accessibility

### Color Contrast
- **Text on Background:** Minimum 4.5:1 ratio (WCAG AA)
- **Large Text (18px+):** Minimum 3:1 ratio (WCAG AA)
- **High Contrast Mode:** 7:1+ ratio (exceeds WCAG AAA)
- Important information never conveyed by color alone

### Typography
- Clear, readable fonts (Inter from Google Fonts)
- Adequate line height (1.5) for readability
- Sufficient paragraph spacing
- No justified text (easier to read)

---

## Form Accessibility

### Features:
- **Labels:** Every input has a visible, associated label
- **Error Messages:** Clear, descriptive error messages
- **Validation:** Real-time validation feedback
- **Required Fields:** Clearly marked with asterisks or labels
- **Instructions:** Clear instructions before complex forms
- **Autocomplete:** Appropriate autocomplete attributes for common fields

---

## Persistent Settings

Settings are saved to browser's localStorage and persist across:
- Page refreshes
- Navigation between pages
- Browser sessions
- Different devices (if using same browser/account)

**Reset Option:** Click "Reset to Default" button to restore original settings

---

## Accessibility Testing

### Tested With:
- ✅ Keyboard-only navigation
- ✅ Screen readers (NVDA, VoiceOver)
- ✅ High contrast mode
- ✅ 200% text zoom
- ✅ Color blindness simulators
- ✅ Mobile accessibility (iOS, Android)

### Tools Used:
- axe DevTools
- WAVE Browser Extension
- Lighthouse Accessibility Audit
- Keyboard navigation testing
- Manual screen reader testing

---

## Compliance

### Standards Met:
- ✅ **WCAG 2.1 Level AA**
- ✅ **Section 508** (US Federal)
- ✅ **EN 301 549** (EU)
- ✅ **ADA Compliance** (Americans with Disabilities Act)

### Principles:
- **Perceivable:** Information presented in multiple ways
- **Operable:** Functionality available via keyboard
- **Understandable:** Clear language and navigation
- **Robust:** Compatible with assistive technologies

---

## User Benefits

### For Users With:
- **Visual Impairments:** High contrast, adjustable font sizes, screen reader support
- **Motor Disabilities:** Full keyboard navigation, large touch targets
- **Cognitive Disabilities:** Clear language, consistent navigation, skip links
- **Hearing Impairments:** Visual indicators for all audio cues (not applicable - no audio)
- **Temporary Disabilities:** Works in bright sunlight (high contrast), one-handed use (keyboard shortcuts)

---

## Support

If you encounter any accessibility issues:
1. Click the accessibility widget
2. Try adjusting settings (font size, contrast, reduced motion)
3. Use keyboard shortcuts for navigation
4. Contact support if issues persist

---

## Future Enhancements

Planned accessibility improvements:
- [ ] Voice navigation support
- [ ] Dark mode theme
- [ ] Dyslexia-friendly font option
- [ ] Reading mode (simplified view)
- [ ] Customizable color themes

---

## Resources

- **WCAG 2.1 Guidelines:** https://www.w3.org/WAI/WCAG21/quickref/
- **WebAIM:** https://webaim.org/
- **A11y Project:** https://www.a11yproject.com/

---

**Last Updated:** January 2026
**Version:** 1.0.0
