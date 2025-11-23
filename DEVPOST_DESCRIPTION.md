# Bitcoin POS System - DevPost Description

## 🎯 Inspiration

The Bitcoin POS System demonstrates how Bitcoin can be used for everyday transactions, making cryptocurrency accessible for both vendors and customers through a seamless payment experience.

## 🚀 What We Built

A complete Bitcoin payment system with three components:

**Vendor Dashboard**: React + TypeScript web app for product management, QR code generation, transaction tracking, and wallet management.

**Backend API**: Node.js + Express + TypeScript REST API with JWT authentication, dual currency wallet system (BTC/Sbtc), atomic transaction processing, and role-based access control.

**Database**: PostgreSQL + Prisma with users, wallets, products, orders, and complete transaction audit trails.

## 🛠️ How We Built It

**Tech Stack**: React 18, TypeScript, Vite, Tailwind CSS, Node.js, Express, Prisma ORM, PostgreSQL (Supabase), JWT, bcryptjs, Zod

**Key Architecture Decisions**:
1. **Dual Currency System**: BTC and Sbtc (1 Sbtc = 0.0000001 BTC) for readable amounts while maintaining precision
2. **Atomic Transactions**: Prisma's `$transaction` ensures wallet updates, orders, and transaction records commit or rollback together
3. **QR Payment Flow**: Vendor builds cart → generates QR → customer scans → atomic payment → vendor completes
4. **Type Safety**: TypeScript throughout with Prisma-generated types and Zod runtime validation

## 💡 Key Features

**Vendors**: Product CRUD, QR code generation, transaction dashboard, wallet tracking, sales stats, fund addition  
**Customers**: QR scanning, wallet viewing, transaction history, secure atomic payments  
**Security**: JWT auth, bcrypt hashing, Zod validation, role-based authorization

## 🐛 Challenges & Solutions

**1. Bitcoin Decimal Precision**: Amounts are tiny (0.000012 BTC for $1). **Solution**: Created Sbtc system (1 Sbtc = 0.0000001 BTC) for readability with full database precision.

**2. Atomic Transaction Processing**: Ensuring complete rollback on failure. **Solution**: Prisma's `$transaction` wraps all operations atomically.

**3. QR Code Structure**: Compact, secure payload design. **Solution**: JSON with vendor/order IDs and cart data. Order created server-side first, QR references it for secure validation.

**4. Type Safety Across Stack**: Maintaining consistency between React and Express. **Solution**: Shared TypeScript types, Prisma-generated backend types, matching frontend types, Zod validation.

## 🔒 Security

bcrypt password hashing, JWT authentication, Zod input validation, Prisma SQL injection prevention, role-based authorization, atomic transactions preventing race conditions.

## 🚀 What's Next

Real Bitcoin integration, enhanced mobile UX, real-time notifications, advanced analytics, multi-vendor marketplace.

## 🎓 What We Learned

Prisma transaction system, TypeScript patterns for type-safe APIs, React state management, financial transaction database design, secure auth implementation, RESTful API design.

## 🏆 Demo

**Vendor**: `vendor@example.com` / `password123`  
**Customer**: `customer@example.com` / `password123`

Run `./start.sh` or start backend (`cd backend && npm run dev`) and vendor dashboard (`cd vendor-dashboard && npm run dev`).

---

Built with ❤️ for MadHacks 2024

