# 🧼 Spluxy Frontend

Modern laundry marketplace frontend built with React, TypeScript, Ant Design, and TailwindCSS.

## 🚀 Quick Start

### Prerequisites
- [Bun](https://bun.sh/) package manager
- Node.js 18+ (for compatibility)

### Installation

```bash
# Install dependencies
bun install

# Start development server
bun run dev

# Build for production
bun run build

# Preview production build
bun run preview
```

## 🛠 Tech Stack

- **React 19** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Ant Design** - UI component library
- **TailwindCSS** - Utility-first CSS framework
- **React Router** - Client-side routing
- **Firebase** - Authentication and database

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   └── Layout/         # Layout components
├── pages/              # Route pages
├── layouts/            # Global layouts
├── hooks/              # Custom React hooks
├── utils/              # Helper functions
├── services/           # API and external service integrations
├── types/              # TypeScript type definitions
└── main.tsx           # Application entry point
```

## 🎨 Design System

### Colors
- **Primary**: `#FF9900` (Orange)
- **Secondary**: `#000000` (Black)

### Typography
- **Headings**: Helvetica Neue
- **Body**: Poppins

### Components
- Built with Ant Design components
- Customized with TailwindCSS utilities
- Responsive design with mobile-first approach

## 🔧 Environment Variables

Copy `env.example` to `.env` and fill in your API keys:

```bash
cp env.example .env
```

Required environment variables:
- `VITE_FIREBASE_API_KEY`
- `VITE_FIREBASE_AUTH_DOMAIN`
- `VITE_FIREBASE_PROJECT_ID`
- `VITE_FIREBASE_STORAGE_BUCKET`
- `VITE_FIREBASE_MESSAGING_SENDER_ID`
- `VITE_FIREBASE_APP_ID`

## 🚀 Development

The development server runs on `http://localhost:5173` by default.

### Available Scripts

- `bun run dev` - Start development server
- `bun run build` - Build for production
- `bun run preview` - Preview production build
- `bun run lint` - Run ESLint

## 📱 Features

- ✅ Responsive design
- ✅ TypeScript support
- ✅ Ant Design components
- ✅ TailwindCSS utilities
- ✅ Firebase integration ready
- ✅ React Router setup
- ✅ Modern React patterns

## 🔄 Next Steps

1. Set up Firebase project and configure environment variables
2. Implement authentication flows
3. Build booking and order management features
4. Add payment integration
5. Implement provider dashboard
6. Add admin panel

## 📄 License

Private project - All rights reserved.