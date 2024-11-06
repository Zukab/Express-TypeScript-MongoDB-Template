# Template Backend API

A robust and scalable backend built with Node.js, Express, TypeScript, and MongoDB.

## 🚀 Features

- JWT Authentication
- Data Validation
- Centralized Error Handling
- Winston Logger
- Swagger API Documentation
- Enhanced Security (Helmet, Rate Limiting)
- Docker Ready
- Jest Testing
- TypeScript
- MongoDB Integration

## 📋 Prerequisites

- Node.js (v18 or higher)
- MongoDB Atlas account or local MongoDB
- Docker (optional)

## 🛠️ Installation

1. Clone repository:
```bash
git clone https://github.com/Zukab/Express-TypeScript-MongoDB-Template
cd Template-backend
```

2. Install dependencies:
```bash
npm install
```

3. Configure environment variables:
```bash
cp .env.example .env
```

Edit `.env` with your settings:
```plaintext
NODE_ENV=development
PORT=3000
MONGODB_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
JWT_EXPIRES_IN=1d
LOG_LEVEL=info
```

## 🚀 Usage

### Development
```bash
npm run dev
```

### Production
```bash
npm run build
npm start
```

### Docker
```bash
# Development
npm run docker:dev

# Production
npm run docker:build
npm run docker:run
```

## 📚 API Documentation

API documentation available at:
```
http://localhost:3000/api-docs
```

## 🔑 Main Endpoints

### Authentication
```typescript
POST /api/v1/auth/signup
POST /api/v1/auth/login
```

### Users
```typescript
GET    /api/v1/users/me
PATCH  /api/v1/users/updateMe
DELETE /api/v1/users/deleteMe
```

## 🧪 Testing
```bash
npm test
```

## 📁 Project Structure
```
src/
├── config/         # Configurations
├── controllers/    # Controllers
├── interfaces/     # TypeScript interfaces
├── middleware/     # Middlewares
├── models/         # MongoDB models
├── routes/         # Routes
├── services/      # Business logic
├── tests/         # Tests
└── utils/         # Utilities
```

## 📝 License
ISC

---
Made with ❤️ by [Sebastian Quintero] a.k.a Zukab
