# IntelliDoc RAG Platform

A full-stack monorepo AI Chat and Document Knowledge Assistant (RAG System) built with modern web technologies, featuring secure authentication, vector-based document retrieval, persistent memory, and an admin dashboard with usage quota controls.

---

## Architecture & Monorepo Structure

This project uses a **Monorepo** architecture powered by **Turborepo** and **pnpm**:

```text
root/
├── apps/
│   ├── web/            # Next.js Frontend (Chat Interface & Admin Dashboard)
│   └── api/            # Backend API Service (Auth, RAG Pipeline, Quota Management)
├── packages/
│   ├── database/       # Prisma ORM, PostgreSQL schema & migrations
│   ├── ai/             # LLM integrations, embeddings, and RAG logic
│   └── ui/             # Shared UI components & design system
└── package.json
```

---

## Tech Stack

- **Frontend & Backend:** Next.js (App Router), TypeScript, Tailwind CSS, Shadcn UI
- **Database & ORM:** PostgreSQL, Prisma ORM
- **AI & RAG:** Vector Database, Text Chunking, Embeddings, LLM Integration
- **Monorepo Tooling:** Turborepo, pnpm workspaces

---

## Core Features

- **Document RAG Pipeline:** Upload PDF/TXT files, asynchronous background chunking, embedding generation, and vector search.
- **AI Chat with Memory:** Interactive chat interface supporting long/short-term memory and context resetting.
- **Admin Dashboard:** Role-Based Access Control (RBAC), user management, and daily message quota enforcement with automatic UTC resets.
- **Graceful Failure Handling:** Standardized HTTP responses (including HTTP 429 for quota limits) with clean frontend notifications.

---

## Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- pnpm package manager (`npm install -g pnpm`)
- PostgreSQL database instance

### Installation & Setup

1. **Clone the repository:**

```bash
git clone https://github.com/slmanZineDine/intellidoc-rag-monorepo.git
cd intellidoc-rag-monorepo
```

2. **Install dependencies:**

```bash
pnpm install
```

3. **Configure Environment Variables:**
   Create `.env` files in the root and respective packages/apps based on the `.env.example` templates.
4. **Run Database Migrations:**

```bash
pnpm db:migrate
```

5. **Start Development Server:**

```bash
pnpm dev
```

---

## License

This project is licensed under the MIT License.
