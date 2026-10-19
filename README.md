# 🛒 বাজার দর (Bazar-Dor)

**Bazar-Dor** is a web application designed to help users explore product prices and access market-related information through a clean, responsive interface. The project uses Next.js and TypeScript, with Better Auth for authentication.

## ✨ Features

- 🏠 **Homepage** — Main landing page for the application.
- 🛍️ **Products** — Browse available products.
- 📦 **Product Details** — View individual products using dynamic routes.
- 🔐 **Authentication** — Sign-in and sign-up pages powered by Better Auth.
- 👤 **User Profile** — Profile page for user-related information.
- 🧭 **Navigation** — Shared header, navigation links, and marquee components.
- 📱 **Responsive UI** — Designed to support different screen sizes.

*Note: Features listed here reflect the visible project structure and may require further implementation or verification.*

## 🛠️ Tech Stack

- **Next.js 16** — React framework
- **React** — UI development
- **TypeScript** — Type-safe development
- **Better Auth** — Authentication and session management
- **Tailwind CSS** — Styling and responsive layouts
- **pnpm** — Package management

## 📁 Project Structure

```text
bazar-dor/
├── public/
│   ├── bazar-hero.png
│   └── logo-icon.png
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   └── auth/
│   │   │       └── [...all]/
│   │   │           └── route.ts
│   │   ├── products/
│   │   │   └── [productId]/
│   │   ├── profile/
│   │   │   └── page.tsx
│   │   ├── signin/
│   │   ├── signup/
│   │   │   └── page.tsx
│   │   ├── favicon.ico
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   ├── loading.tsx
│   │   ├── not-found.tsx
│   │   └── page.tsx
│   ├── Components/
│   │   ├── Homepage/
│   │   ├── shared/
│   │   │   ├── Footer.tsx
│   │   │   ├── Header.tsx
│   │   │   ├── Marquee.tsx
│   │   │   ├── NavLinks.tsx
│   │   │   └── UserInfo.tsx
│   │   └── ProductCard.tsx
│   ├── lib/
│   ├── types/
│   └── proxy.ts
├── .env
├── .gitignore
├── next.config.ts
├── package.json
├── pnpm-lock.yaml
├── pnpm-workspace.yaml
├── tsconfig.json
└── README.md
```

## 🚀 Getting Started

### Prerequisites

Make sure you have installed:

- Node.js
- pnpm
- A database configured for your Better Auth setup

### 1. Clone the repository

```bash
git clone <your-repository-url>
cd bazar-dor
```

Replace `<your-repository-url>` with your actual GitHub repository URL.

### 2. Install dependencies

```bash
pnpm install
```

### 3. Configure environment variables

Create a `.env` file in the project root and configure the environment variables required by your application.

For example:

```env
BETTER_AUTH_SECRET=your-secure-secret
BETTER_AUTH_URL=http://localhost:3000
DATABASE_URL=your-database-connection-string
```

These are example variable names. Check your `src/lib/auth.ts` and database configuration to confirm which variables your project actually requires.

**Security:** Never commit real secrets, passwords, or database credentials to GitHub.

### 4. Run the development server

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🔐 Authentication

The project integrates Better Auth with the Next.js App Router.

Authentication API route:

`src/app/api/auth/[...all]/route.ts`

```typescript
import { auth } from "@/lib/auth";
import { toNextJsHandler } from "better-auth/next-js";

export const { POST, GET } = toNextJsHandler(auth);
```

This route forwards supported authentication requests to Better Auth through its Next.js handler.

The `UserInfo.tsx` component uses `authClient.useSession()` to access the current session and retrieve user information on the client side.

## 📜 Available Scripts

| Command | Description |
|---|---|
| `pnpm dev` | Start the development server |
| `pnpm build` | Build the production application |
| `pnpm start` | Start the production server |
| `pnpm lint` | Run linting, if configured |

## 🏗️ Production Build

To create a production build:

```bash
pnpm build
```

To run the production build locally:

```bash
pnpm start
```

## 🚀 Deployment

The application can be deployed to a Next.js-compatible hosting platform, such as Vercel.

Before deployment:

1. Configure all required environment variables.
2. Ensure the production database is accessible.
3. Set the correct Better Auth URL and trusted origins.
4. Run `pnpm build` and resolve any build errors.
5. Test authentication and application routes in production.

## 👩‍💻 Author

**Mariam Farzana**

- GitHub: [@Mariam091990](https://github.com/Mariam091990)

---

*Developed with Next.js, TypeScript, and Better Auth.*
