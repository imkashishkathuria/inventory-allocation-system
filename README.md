# inventory-allocation-system
# Inventory Allocation System

## Tech Stack
- Backend: Node.js, Express.js, MongoDB, Mongoose
- Frontend: React.js (minimal)
- Database: MongoDB

---

## Project Structure

backend/
├── routes/
│   └── order.routes.js
├── controllers/
│   └── order.controller.js
├── services/
│   └── order.service.js
├── repositories/
│   └── product.repository.js
│   └── order.repository.js
├── models/
│   └── Product.js
│   └── Order.js
├── config/
│   └── db.js
├── server.js

frontend/
├── src/
│   └── App.js

---

## API (ONLY ONE)

### POST /order

This single API:
- Validates product existence
- Validates stock availability
- Prevents negative stock
- Deducts stock
- Creates order
- Handles concurrent requests safely

❌ No other APIs are created

---

## Concurrency Handling

MongoDB transactions and atomic stock updates are used.
This prevents race conditions when multiple orders are placed simultaneously.

---

## Edge Case Handling

If product stock = 5:
- Order quantity = 3 → SUCCESS
- Another order quantity = 3 → FAIL

This is handled safely using transactions.

---

## Business Logic Location

- Controllers: Request & response only
- Services: All validation, stock logic, concurrency handling
- Repositories: Database operations

