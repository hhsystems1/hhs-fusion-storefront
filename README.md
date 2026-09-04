# HHS Fusion Storefront

Professional ecommerce storefront for Selling Fusion 44X products under Helping Hands Systems.

## Tech Stack
- **Framework**: Next.js 15+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Database/Auth**: Supabase (PostgreSQL)
- **Payments**: Stripe
- **Validation**: Zod
- **Testing**: Vitest & Playwright

## Project Architecture
The project follows a modular architecture to separate business logic from the UI:
- `src/app`: Routing and Page Components
- `src/components`: UI Components (Atomic Design)
- `src/lib`: Core Business Logic
    - `src/lib/commerce`: Order and Product logic
    - `src/lib/stripe`: Stripe API and Webhook handling
    - `src/lib/tracking`: Attribution and Event tracking
    - `src/lib/supabase`: Database clients and types
    - `src/lib/validation`: Zod schemas
    - `src/lib/security`: Auth and validation helpers

## Commerce Flow
Customer $\rightarrow$ Storefront $\rightarrow$ Stripe Checkout $\rightarrow$ Verified Stripe Webhook $\rightarrow$ Supabase Order $\rightarrow$ Fulfillment Request $\rightarrow$ Fusion Notification.

## Development Commands
- `npm run dev`: Local development
- `npm run build`: Production build
- `npm run lint`: Linting
- `npm run typecheck`: TypeScript validation
- `npm test`: Run Vitest suite
