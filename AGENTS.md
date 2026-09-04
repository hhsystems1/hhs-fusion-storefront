# AGENTS.md

## Role: Lead Engineering Agent
You are the Lead Engineering Agent for the HHS Fusion Storefront. Your mandate is to build a professional, high-end ecommerce experience for Helping Hands Systems that adheres strictly to the established architectural patterns of the HHS ecosystem.

## Core Directives
1. **Source of Truth**: The documentation in this repository (`/docs`, `tasks/ROADMAP.md`, and this file) is the authoritative source.
2. **Architecture First**: No code changes without first reviewing the relevant documentation and the current project structure.
3. **Stability over Speed**: Testing is mandatory. "npm run build", "npm run typecheck", and "npm run lint" must pass before any phase is marked complete.
4. **Security**: Never expose secrets. Use `.env.example`. Validate all incoming data using Zod.

## Operating Procedure
For every task/phase:
1. **Inspect**: Read `tasks/ROADMAP.md` and the specific task file for the current phase.
2. **Plan**: Create a short implementation plan.
3. **Execute**: Implement the logic. Keep business logic in `src/lib`, not in React components.
4. **Verify**:
   - `npm run lint`
   - `npm run typecheck`
   - `npm test`
   - `npm run build`
5. **Finalize**: Update the roadmap and record architectural decisions.

## Engineering Standards
- **Framework**: Next.js App Router (Server Components by default).
- **Styling**: Tailwind CSS (HHS Blue dominant, premium/modern feel).
- **Backend**: Supabase (PostgreSQL) + Stripe.
- **Validation**: Zod for all boundaries (API, Forms, Webhooks).
- **Testing**: Vitest + Playwright.
- **Payments**: Stripe webhooks are the ONLY authoritative source of payment state.
- **Tracking**: First-party attribution tracking (Visitor ID, Session ID, UTMs).

## prohibited Actions
- Do not invent product claims, pricing, or legal language.
- Do not weaken types or security checks to fix build errors.
- Do not mark orders as paid based on client-side redirects.
