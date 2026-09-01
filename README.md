# ⚡ Next.js + NestJS Production Monorepo Starter

[![CI Pipeline](https://github.com/YannMorvan/next-nest-monorepo-starter/actions/workflows/ci.yml/badge.svg)](https://github.com/YannMorvan/next-nest-monorepo-starter/actions/workflows/ci.yml)
[![Turborepo](https://img.shields.io/badge/Turborepo-2.x-EF4444?logo=turborepo&logoColor=white)](https://turborepo.org/)
[![Next.js](https://img.shields.io/badge/Next.js-16.3-black?logo=next.js&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.2-61DAFB?logo=react&logoColor=black)](https://react.dev/)
[![NestJS](https://img.shields.io/badge/NestJS-12.x-E0234E?logo=nestjs&logoColor=white)](https://nestjs.com/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.x-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Prisma](https://img.shields.io/badge/Prisma-6.x-2D3748?logo=prisma&logoColor=white)](https://www.prisma.io/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-blue?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![pnpm](https://img.shields.io/badge/pnpm-11.x-orange?logo=pnpm&logoColor=white)](https://pnpm.io/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A modern, enterprise-ready full-stack monorepo boilerplate powered by **Turborepo**, **pnpm workspaces**, **Next.js 16 (App Router)**, **NestJS 12**, **Prisma ORM**, and **PostgreSQL**. Fully containerized with multi-stage Docker builds and automated CI pipelines.

---

## 🌟 Highlights

- **Turborepo & pnpm 11 Workspaces** — Pipeline dependencies, task caching, and workspace protocols.
- **End-to-End Type Safety** — Shared schemas, DTOs, and runtime contracts via Zod.
- **Modern Frontend** — Next.js 16.3 (App Router, Standalone output, React 19.2, Tailwind CSS v4, Dark Mode support via `next-themes`).
- **Scalable Backend** — NestJS 12 with Swagger OpenAPI documentation, global validation pipes, and health check endpoints.
- **Isolated Database Layer** — Dedicated `@repo/database` package encapsulating Prisma 6 Client and migrations.
- **Testing Suite** — Vitest 4 configured across applications and packages with JSDOM and Prisma mocks.
- **Docker Orchestration** — Separate configurations for local database development (`docker-compose.yml`) and complete production deployment (`docker-compose.prod.yml`).
- **GitHub Actions CI** — Automated linting, typechecking, testing, and building pipeline on Node 22.

---

## 📁 Repository Structure

```text
.
├── apps
│ ├── api # NestJS REST API (Port 4000)
│ └── web # Next.js App Router Frontend (Port 3000)
├── packages
│ ├── contracts # Shared Zod schemas, validation logic & types
│ ├── database # Prisma schema, client & migrations
│ ├── eslint-config # Shared ESLint configuration
│ └── typescript-config # Shared tsconfig definitions
├── docker-compose.yml # Local dev database orchestration
├── docker-compose.prod.yml # Production multi-container stack
└── turbo.json # Turborepo pipeline definitions
```

---

## 🚀 Quickstart

### Prerequisites

- **Node.js**: `^20.0.0` (Recommended: `>=22.0.0`)
- **pnpm**: `>=11.0.0` (`corepack enable`)
- **Docker & Docker Compose**

### 1. Clone and Install

```bash
git clone https://github.com/YannMorvan/next-nest-monorepo-starter.git
cd next-nest-monorepo-starter
pnpm install
```

### 2. Configure Environment

Copy the example environment file:

```bash
cp .env.example .env
```

### 3. Start Local Database & Run Migrations

```bash
# Start PostgreSQL container
pnpm run db:up

# Generate Prisma Client & push schema
pnpm run db:generate
pnpm run db:push
```

### 4. Run Development Servers

```bash
pnpm dev
```

- **Frontend**: [http://localhost:3000](http://localhost:3000)
- **API**: [http://localhost:4000/api](http://localhost:4000/api)
- **Swagger Docs**: [http://localhost:4000/api/docs](http://localhost:4000/api/docs)
- **Prisma Studio**: `pnpm run db:studio` (available at [http://localhost:5555](http://localhost:5555))

---

## 🐳 Docker Deployment

### Production Stack Orchestration

Build and run the entire stack (PostgreSQL + NestJS API + Next.js Standalone) in isolated Docker containers:

```bash
# Build and start all services
pnpm run prod:up

# View combined container logs
pnpm run prod:logs

# Stop all services
pnpm run prod:down
```

---

## ⚙️ Environment Variables

### Root (`.env`)

| Variable              | Description                          | Default                                                                   |
| --------------------- | ------------------------------------ | ------------------------------------------------------------------------- |
| `POSTGRES_USER`       | PostgreSQL superuser                 | `postgres`                                                                |
| `POSTGRES_PASSWORD`   | PostgreSQL password                  | `postgres`                                                                |
| `POSTGRES_DB`         | Application database name            | `monorepo_db`                                                             |
| `DATABASE_URL`        | Prisma connection string             | `postgresql://postgres:postgres@localhost:5432/monorepo_db?schema=public` |
| `PORT`                | API server port                      | `4000`                                                                    |
| `API_INTERNAL_URL`    | Docker internal network API endpoint | `http://api:4000/api`                                                     |
| `NEXT_PUBLIC_API_URL` | Public browser API endpoint          | `http://localhost:4000/api`                                               |

---

## 🛠️ Useful Scripts

| Command            | Description                                          |
| ------------------ | ---------------------------------------------------- |
| `pnpm dev`         | Run all applications concurrently in watch mode      |
| `pnpm build`       | Build all applications and packages                  |
| `pnpm lint`        | Run ESLint across all workspaces                     |
| `pnpm type-check`  | Run TypeScript typechecks across all workspaces      |
| `pnpm test`        | Run Vitest suites across API, Web, and packages      |
| `pnpm check-all`   | Run lint, type-check, test, and build simultaneously |
| `pnpm db:generate` | Generate Prisma Client bindings                      |
| `pnpm db:push`     | Push schema changes directly to the database         |
| `pnpm db:migrate`  | Create and apply database migrations                 |
| `pnpm db:studio`   | Open Prisma Studio GUI                               |
| `pnpm prod:up`     | Build and start the full production Docker stack     |
| `pnpm prod:down`   | Stop and tear down production containers             |
| `pnpm prod:logs`   | Stream logs from all production containers           |

---

## 🧪 Testing

The repository uses **Vitest** for fast, unified unit and integration testing.

```bash
# Run all tests once
pnpm test

# Run tests in watch mode for a specific app
pnpm --filter api test:watch
pnpm --filter web test:watch
```

---

## 📄 License

This project is open-source and licensed under the [MIT License](LICENSE).
