# Garage System

A backend management system for parking garages built with Node.js, Express, and PostgreSQL.

## 📋 Overview

This is a RESTful API for managing garage operations including:
- **Customers**: Manage customer information
- **Vehicles**: Track customer vehicles
- **Spaces**: Manage parking spaces
- **Bills**: Generate and track billing
- **Payments**: Record payment transactions
- **Contracts**: Manage customer contracts

## 🛠️ Tech Stack

- **Runtime**: Node.js
- **Framework**: Express 5.1.0
- **Database**: PostgreSQL
- **ORM**: Objection.js 3.1.5
- **Query Builder**: Knex 3.1.0
- **Authentication**: JWT (jsonwebtoken 9.0.2)
- **Password Hashing**: bcrypt 6.0.0
- **Validation**: Joi 18.0.1
- **Logging**: Morgan 1.10.1
- **Development**: Nodemon 3.1.10

## 📦 Installation

### Prerequisites
- Node.js (v14 or higher)
- PostgreSQL

### Setup

1. **Clone the repository**
```bash
git clone <repository-url>
cd garage-system
```

2. **Install dependencies**
```bash
npm install
```

3. **Configure database**
Edit `knexfile.js` with your PostgreSQL credentials:
```javascript
development: {
  client: 'postgresql',
  connection: {
    database: 'garage_system',
    user: 'postgres',
    password: 'your_password'
  }
}
```

4. **Run migrations**
```bash
npm run migrate
```

## 🚀 Usage

### Development

Start the development server:
```bash
npm start
```

The API will run on `http://localhost:3000`

### Scripts

- `npm start` - Start the application
- `npm run migrate` - Run database migrations
- `npm run new_migrate` - Create a new migration
- `npm run rollback` - Rollback the latest migration
- `npm test` - Run tests (not yet configured)

## 📁 Project Structure

```
.
├── src/
│   └── app.js              # Main application entry point
├── migrations/             # Database migrations
│   ├── 20251008235438_create_table_customer.js
│   ├── 20251009000105_create_table_vehicle.js
│   ├── 20251009001756_create_table_space.js
│   ├── 20251009001837_create_table_bill.js
│   ├── 20251009001857_create_table_pay.js
│   └── 20251009001939_create_table_contract.js
├── index.js                # Server entry point
├── knexfile.js             # Knex configuration
├── package.json            # Project dependencies
└── README.md               # This file
```

## 🗄️ Database Schema

The system includes the following tables:

- **customer** - Customer information
- **vehicle** - Vehicle data (linked to customers)
- **space** - Parking space details
- **bill** - Billing records
- **pay** - Payment transactions
- **contract** - Customer contracts

## 🔐 Security Features

- JWT-based authentication
- Password hashing with bcrypt
- Data validation with Joi

## 📝 License

ISC

## 👤 Author

Garage System

---

For more information or issues, please open an issue in the repository.
