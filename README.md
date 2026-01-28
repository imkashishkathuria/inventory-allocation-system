# inventory-allocation-system
# Mini Grocery Order System

## Tech Stack
- Backend: Node.js, Express.js, MongoDB, Mongoose
- Frontend: React.js (minimal UI)
- Database: MongoDB (local)

---

## Project Structure

backend/
├── controllers/
│   └── order.controller.js
│   └── product.controller.js
├── services/
│   └── order.service.js
├── repositories/
│   └── product.repository.js
│   └── order.repository.js
├── models/
│   └── Product.js
│   └── Order.js
├── routes/
│   └── index.js
├── config/
│   └── db.js
├── seed.js
├── server.js

frontend/
├── src/
│   ├── App.js
│   ├── api.js
│   └── index.js

---

## APIs (STRICTLY ONLY 2)

### 1. GET /products
- Fetches all products from database
- Used by frontend to display product list

### 2. POST /orders
- Places an order
- Handles:
  - Product existence check
  - Stock validation
  - Stock deduction
  - Order creation
- All logic executed in ONE database transaction

---

## Business Logic Location

- Controllers:
  - Only handle request & response
- Services:
  - ALL business logic (stock check, order creation)
- Repositories:
  - Database operations only
- Models:
  - MongoDB schemas

❌ No business logic inside controllers  
❌ No extra APIs created  

---

## Transaction Handling

MongoDB sessions are used to ensure:
- Stock deduction and order creation happen atomically
- If any step fails, all changes are rolled back

---

## Frontend Scope

- Minimal React UI
- Displays products
- Places order
- Shows success or failure message

No UI or design focus as per assignment rules.
