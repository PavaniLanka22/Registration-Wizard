**The Registration Wizard**

**Live Demo Link:** https://vercel.com/pavanilanka22s-projects/registration-wizard/2Bhkbt9p7oZnTJmZfMbcs9mbucBE

![alt text](<Screenshot 2026-05-21 174432.png>)

![alt text](<Screenshot 2026-05-21 174501.png>)

![alt text](<Screenshot 2026-05-21 174549.png>)

![alt text](<Screenshot 2026-05-21 174613.png>)

## Registration Wizard Module

### Phase 1 — MVP & State Management

* Built a 3-step onboarding wizard:

  * Personal Info
  * Account Details
  * Review & Submit
* Implemented Next/Back navigation with conditional rendering.
* Lifted form state to a parent component for centralized data management.
* Preserved user input while navigating between steps.
* Added final submission flow with success state and payload logging.

### Phase 2 — Validation & UX

* Added real-time form validation.
* Validated:

  * Email format
  * Password length (8+ chars)
  * Confirm password match
* Disabled navigation until current step is valid.
* Added Show/Hide password toggle.
* Implemented dynamic progress indicator.

### Phase 3 — Enterprise Form Architecture

* Migrated form handling to `react-hook-form`.
* Integrated `zod/yup` schema validation.
* Improved performance with isolated re-renders and scalable validation architecture.

### Tech Highlights

* React
* React Hook Form
* Zod/Yup
* Conditional Rendering
* Centralized State Management
* Responsive UI
