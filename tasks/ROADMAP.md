# ROADMAP.md

## Project Goal
Build a professional, premium ecommerce storefront for Fusion 44X products under Helping Hands Systems.

---

## Phase 1: Foundation & Infrastructure [INCOMPLETE]
*Goal: Establish the technical base, branding, and core library structures.*

- [ ] Project Initialization (Next.js, TS, Tailwind)
- [ ] Brand Configuration (HHS Blue, Typography, Theme)
- [ ] Supabase Project Integration & Client Setup
- [ ] Basic Folder Structure (`src/lib/*`)
- [ ] Environment Variable Validation (Zod)
- [ ] Core Tracking Library Setup (Visitor/Session IDs)
- [ ] Basic Layout & Global UI Components
- [ ] CI/CD Pipeline Setup (Lint, Typecheck, Build)

**Acceptance Criteria:**
- `npm run build` succeeds.
- `npm run typecheck` succeeds.
- Brand colors are correctly configured in Tailwind.
- Environment variables are validated on startup.
- Tracking library can generate a session ID.

---

## Phase 2: Catalog & Product Presentation [PENDING]
*Goal: Create the "Shop" experience.*

- [ ] Product Database Schema (Supabase)
- [ ] Product Listing Page (PLP)
- [ ] Product Detail Page (PDP)
- [ ] Category Filtering/Sorting
- [ ] Premium Product Image Gallery
- [ ] Product Schema.org JSON-LD for SEO

---

## Phase 3: Cart & Checkout Flow [PENDING]
*Goal: Move users from browsing to payment.*

- [ ] Client-side Cart State Management
- [ ] Cart Drawer/Page UI
- [ ] Stripe Checkout Integration
- [ ] Shipping/Tax Logic (Stripe-handled)
- [ ] Checkout Session Creation API

---

## Phase 4: Payment & Order Fulfillment [PENDING]
*Goal: Secure, idempotent order processing.*

- [ ] Stripe Webhook Implementation (`/api/webhooks/stripe`)
- [ ] Webhook Signature Verification
- [ ] Idempotent Order Recording in Supabase
- [ ] Fulfillment Request Trigger
- [ ] Order Confirmation Page (Client-side only)
- [ ] Order Status/Tracking Page

---

## Phase 5: Support & Legal [PENDING]
*Goal: Complete the professional site requirements.*

- [ ] About Page
- [ ] Support/Contact Form
- [ ] Privacy Policy & Terms of Service
- [ ] Footer & Navigation

---

## Phase 6: Admin & Analytics [PENDING]
*Goal: Management and visibility.*

- [ ] HHS Admin Dashboard (Orders, Customers)
- [ ] Product Management Interface
- [ ] Internal Analytics Dashboard
- [ ] Fusion Fulfillment Portal Integration
