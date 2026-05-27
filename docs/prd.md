# Requirements Document

## 1. Application Overview
- **Application Name:** Bhoyee Global Enterprise Website
- **Description:** A professional innovation-focused website for Bhoyee Global Enterprise, a registered Nigerian firm (CAMA 2020) operating at the intersection of digital transformation and strategic growth. The website showcases integrated service pillars—Training, Business Consulting, Digital Innovation, and Software Development—and enables potential clients to make inquiries.

---

## 2. Users & Use Cases

### 2.1 Target Users
- Prospective clients seeking training, consulting, or software development services
- Individuals or businesses interested in purchasing gadgets
- Partners or investors looking to learn about the company

### 2.2 Core Use Cases
- Visitors browse the company's services and offerings
- Visitors learn about the company's background and legitimacy
- Visitors submit inquiries or contact the company directly

---

## 3. Page Structure & Core Features

### 3.1 Page Overview
```
Bhoyee Global Enterprise Website
├── Home Page
├── About Page
├── Services Page
│   ├── Training & Consulting
│   ├── Trading & Gadget Sales
│   └── Software Development
├── Contact Page
```

### 3.2 Home Page
- Hero section with company name, a short tagline, and a call-to-action button (e.g., Explore Our Services)
- Brief introduction to Bhoyee Global Enterprise and its registered status under the Companies and Allied Matters Act 2020
- Service summary cards highlighting the four core business areas: Training, Business Consulting, Digital Innovation, and Software Development, with the following animation and interaction effects applied to each card:
  - On page load, cards animate into view with a staggered fade-in and upward slide effect, each card appearing sequentially with a slight delay to create a cascading entrance
  - On hover, each card lifts with a smooth upward translate and an elevated box shadow to convey depth and interactivity
  - On hover, a subtle background gradient or color shift transitions smoothly across the card surface
  - A thin accent border or bottom highlight line animates in on hover, reinforcing the active state
  - The card icon or illustration scales up slightly on hover with a smooth ease transition
  - The call-to-action text or arrow indicator on each card fades in or slides into view on hover
- Navigation bar linking to all main pages
- Footer with company name, brief description, and quick links

### 3.3 About Page
- Opening headline: 「We architect the future of work & business through technology, insight, and human capital.」
- Company narrative: Bhoyee Global Enterprise is a registered Nigerian firm (CAMA 2020) operating at the intersection of digital transformation and strategic growth. Our integrated service pillars—Training, Business Consulting, Digital Innovation, and Software Development—empower enterprises to thrive in an AI-driven world. We don't just sell services; we embed ourselves as growth partners, helping organizations unlock efficiency, modernize operations, and build scalable digital assets.
- Leadership quote displayed as a styled blockquote: 「To democratize intelligence and automation—making cutting-edge capabilities accessible to every forward-thinking organization.」 — Bhoyee Leadership
- Company registration details: Certified under CAMA 2020 | Business Registration: BN 3098721

### 3.4 Services Page
- Dedicated section for each of the four service areas:
  - **Training & Consulting:** Description of training programs and consulting offerings
  - **Trading & Consulting Services:** Overview of trading and business consulting scope
  - **Buying & Selling of Gadgets:** Description of gadget products and sales process
  - **Software Development:** Overview of software development capabilities and solutions
- Each service section includes a brief description and a call-to-action (e.g., Get in Touch)

### 3.5 Contact Page
- Contact inquiry form with the following fields:
  - Full Name (required)
  - Email Address (required)
  - Phone Number (optional)
  - Subject (required)
  - Message (required)
  - Submit button
- Display of company name and general business description
- Confirmation message displayed upon successful form submission

---

## 4. Business Rules & Logic

- All navigation links must be accessible from every page via the top navigation bar
- The contact form must validate required fields before submission is allowed
- Upon successful form submission, a success confirmation message must be displayed to the user
- The footer must appear consistently across all pages
- Service descriptions must align with the registered business scope: Training, Business Consulting, Digital Innovation, and Software Development
- Card entrance animations on the Home page must trigger on page load and must not loop or repeat after the initial appearance
- Card hover effects must be smooth and consistent across all service cards, using CSS transitions with an ease or ease-in-out timing function
- Animation and hover effects must not interfere with card content readability or accessibility

---

## 5. Exceptions & Edge Cases

| Scenario | Expected Behavior |
|---|---|
| User submits contact form with missing required fields | Display inline validation error messages indicating which fields are required |
| User submits contact form with invalid email format | Display an error message prompting a valid email address |
| Page fails to load | Display a user-friendly error message |
| User's device has reduced motion preferences enabled | Card animations and hover effects should be disabled or minimized to respect accessibility settings |

---

## 6. Acceptance Criteria

- All four pages (Home, About, Services, Contact) are accessible and render correctly
- The Home page clearly presents the company name, tagline, and service summary
- Service cards on the Home page display a staggered fade-in and slide-up animation on page load
- Service cards on the Home page respond to hover with lift effect, shadow elevation, gradient shift, accent highlight, icon scale, and call-to-action reveal
- All card animations and hover transitions are smooth and visually consistent
- The About page displays the opening headline, company narrative, leadership quote, and registration details (BN 3098721, CAMA 2020) as specified
- The Services page contains dedicated sections for all four business areas
- The Contact page form validates required fields and displays a success message upon submission
- Navigation bar and footer are present and functional on all pages
- The overall design conveys a professional and innovative brand image

---

## 7. Out of Scope for This Version

- User login or account management system
- E-commerce or online payment functionality for gadget purchases
- Blog or news section
- Multi-language support
- Live chat or chatbot integration
- Client portal or project tracking dashboard
- CMS (Content Management System) for non-technical content editing