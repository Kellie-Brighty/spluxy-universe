# 🧼 Spluxy Laundry Universe – Web App  
> Modern Laundry Ecosystem: Fast • Convenient • Connected

---

## 🟠 **Project Overview**

**Spluxy Laundry Universe** is a modern, tech-driven **laundry marketplace platform** that connects customers with laundry service providers seamlessly.  
The platform is built for **speed**, **automation**, and **digital convenience**, featuring:

- 🔹 Fast bookings & transparent pricing  
- 🔹 Real-time pickup/delivery scheduling  
- 🔹 Image recognition for automatic pricing  
- 🔹 Digital dashboards for laundry providers  
- 🔹 Loyalty systems, referrals, and admin analytics

---

## 🎨 **Branding & Design Guidelines**

Cursor must follow the **official Spluxy Brand Guide** for UI layouts and styling:

- **Colors**:
  - Primary: `#FF9900` (Orange)
  - Secondary: `#000000` (Black)
  - Gradients between these colors can be used for CTA backgrounds or hero sections.

- **Typography**:
  - **Headings / Buttons / Labels:** Helvetica Neue
  - **Body:** Poppins

- **Voice & Tone**:
  - Direct  
  - Confident  
  - Elegant  
  - Upbeat

- **UI Style**:
  - Use **Ant Design** components for structure and interactivity.
  - TailwindCSS for responsive layouts and utility classes.
  - Rounded corners (`2xl`), soft shadows, clean spacing.
  - Smooth transitions and hover effects.
  - Prominent, clear CTAs.

---

## 🧰 **Tech Stack & Architecture**

| Layer              | Technology / Service               | Purpose |
|--------------------|-------------------------------------|---------|
| **Frontend**       | React (Vite) + **TypeScript**, Ant Design, TailwindCSS | User Interface |
| **Backend**        | Firebase                          | Auth, Firestore, Functions |
| **File Storage**   | IMGBB API                          | Image uploads (clothes, logos) |
| **Email Service**  | Node.js + Express + Nodemailer     | Booking & notification emails |
| **Payments**       | Paystack / Flutterwave            | Online payments |
| **Image Pricing**  | Image Recognition API (TBD)       | Auto pricing |
| **Maps**           | Google Maps API                   | Pickup & delivery selection |

---

## 🧠 **Core Functional Modules**

### 🧍 Customer Module
- Firebase Authentication (Email/Password)
- Upload clothes images → stored on IMGBB → priced via Image Recognition API
- Booking system: select pickup & delivery slots
- Online payments (Paystack/Flutterwave)
- Real-time order tracking
- Loyalty points & referral rewards
- Notifications via email and in-app alerts

### 🧺 Laundry Provider Module
- Business onboarding (logo, pricing, contact info)
- Dashboard with orders, customers, pricing updates
- Status workflow: `Pickup → In Progress → Ready → Delivered`
- Revenue tracking and payouts

### 🧑‍💼 Admin Module
- Approve/manage laundry providers
- View bookings, disputes, payments
- Platform analytics (bookings, revenue, growth, top performers)

---

## 📜 **User Flows**

### **Customer**
1. Sign up / Login (Firebase)
2. Upload clothes image → IMGBB → Image Pricing API
3. Schedule pickup/delivery
4. Make payment
5. Receive status updates + loyalty points

### **Provider**
1. Register → Complete onboarding form
2. Set pricing, upload logo, fill store details
3. Manage orders in dashboard
4. Update statuses through workflow
5. Track revenue and payouts

### **Admin**
1. Login securely
2. Approve/reject provider applications
3. Monitor platform metrics and disputes
4. Manage loyalty campaigns and promotions

---

## 📁 **Project Structure**

Cursor should scaffold a **TypeScript monorepo-style structure**:

spluxy-laundry-universe/
│
├── frontend/ # React + Vite + TS + antd + Tailwind
│ ├── src/
│ │ ├── components/ # Shared UI components (Buttons, Modals, etc.)
│ │ ├── pages/ # Route pages (Login, Dashboard, Booking, etc.)
│ │ ├── layouts/ # Global layouts (e.g., AppLayout, AuthLayout)
│ │ ├── hooks/ # Custom hooks (auth, queries, etc.)
│ │ ├── utils/ # Helper functions (formatters, constants)
│ │ ├── services/ # Firebase, IMGBB, Payment API handlers
│ │ ├── types/ # Global TypeScript type definitions
│ │ └── main.tsx
│ ├── public/
│ └── vite.config.ts
│
├── backend/ # Express server for email service
│ ├── src/
│ │ ├── server.ts
│ │ ├── routes/
│ │ ├── controllers/
│ │ ├── utils/
│ │ └── types/
│ └── tsconfig.json
│
├── firebase/
│ ├── firestore.rules
│ ├── firebase.json
│ ├── functions/
│ └── hosting/
│
├── docs/
│ ├── BRAND_GUIDE.md
│ ├── PRD.md
│ └── API_REFERENCE.md
│
└── package.json


---

## ⚡ **Frontend Setup Notes (Cursor)**

1. Initialize the frontend with **Vite + React + TypeScript**:
   ```bash
   npm create vite@latest frontend -- --template react-ts
Install Ant Design, TailwindCSS, and required dependencies:

bash
Copy code
cd frontend
npm install antd @ant-design/icons
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
Configure tailwind.config.js to work with Ant Design (content scanning for antd classes too).

Use Ant Design for components such as:

Form, Input, Select, DatePicker, Modal, Table, Drawer, Steps, Upload

Ant Design Layout components for dashboards.

Tailwind handles spacing, responsiveness, and layout utilities.

Use TypeScript for all components, hooks, services, and types.

Integrate Firebase SDK for auth & Firestore, and build modular service classes for IMGBB and payments.

📨 Backend (Email Service)
Node.js + Express + TypeScript
Located in /backend.
Handles transactional emails:

Booking confirmations

Order status updates

Provider notifications

Uses:

Nodemailer with SMTP or a transactional email provider.

.env for secure credentials.

server.ts entry point with structured routes and controllers.

☁️ Firebase Integration
Firestore for Users, Orders, Providers, Payments, Loyalty

Firebase Auth for customer/provider authentication

Cloud Functions for:

Payment webhooks

Image pricing API calls

Notification triggers

🖼 IMGBB API Integration
All image uploads (clothes, logos) go to IMGBB.

API returns URL → stored in Firestore.

Used in booking process & provider onboarding.

💳 Payments
Use Paystack or Flutterwave SDK for:

Initiating payment from frontend

Handling callbacks in Firebase Functions

Verifying transactions

Updating Firestore order status

📊 Admin Dashboard
Use Ant Design Table, Card, Statistic, and Charts (e.g., Recharts or Ant Design Charts) to display:

Monthly bookings

Avg. completion time

Repeat customer rate

Top-performing providers

Revenue trends

🚀 Development Flow for Cursor
Scaffold frontend with TS, AntD, Tailwind

Configure Firebase

Implement Authentication

Set up IMGBB service

Create Provider onboarding flow

Build Customer booking flow with AntD Steps & Upload

Integrate Payments

Set up Express Email service

Build Dashboards (Provider & Admin) using AntD components

Polish branding & animations per Spluxy guide

✅ Summary
This project uses a scalable, TypeScript-first architecture with Ant Design UI for a polished experience.
By following this guide, Cursor should be able to scaffold a full-stack web app that reflects Spluxy’s modern brand and functional goals.

🟠 Frontend: React + Vite + TypeScript + AntD + Tailwind
☁️ Backend: Firebase + Express Email Service
🧠 Integrations: IMGBB, Payments, Image Recognition, Google Maps