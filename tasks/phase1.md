# Phase 1: Foundation & Infrastructure

## Goal
Establish the technical base, branding, and core library structures for the HHS Fusion Storefront.

## Tasks
- [ ] **Brand Configuration**
    - Configure `tailwind.config.ts` with HHS brand colors (Primary: HHS Blue).
    - Define global typography and theme constants.
- [ ] **Project Structure**
    - Initialize `src/lib/commerce`, `src/lib/stripe`, `src/lib/tracking`, `src/lib/supabase`, `src/lib/validation`, `src/lib/security`.
- [ ] **Environment Validation**
    - Create `src/lib/validation/env.ts` using Zod to validate all required `.env` variables.
    - Create `.env.example` with all required keys.
- [ ] **Supabase Integration**
    - Setup Supabase client in `src/lib/supabase/client.ts`.
    - Define basic database types.
- [ ] **Core Tracking Setup**
    - Implement basic visitor and session ID generation in `src/lib/tracking`.
    - Ensure tracking persistence (cookies/localStorage).
- [ ] **Global UI**
    - Implement basic `layout.tsx` with global navigation and footer shells.
    - Create base UI components for the brand.
- [ ] **CI/CD Validation**
    - Verify `npm run lint`, `npm run typecheck`, and `npm run build` pass.

## Acceptance Criteria
- [ ] `npm run build` succeeds without errors.
- [ ] `npm run typecheck` passes.
- [ ] Environment variables are validated on application start.
- [ ] Brand colors are correctly applied via Tailwind.
- [ ] Tracking library generates and persists a session ID.
