# PEBL Project

<!-- Optional: badges like build status, license, version, etc. -->
<!-- Example: badges: [![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE) -->

## 1. Project Name
**PEBL Project**

## 2. Description (What all things your application does in short)

**Technical Summary:**  
PEBL is a [brief tagline, e.g., “preordering and order management” / “booking & billing automation” / whatever the core domain is] web application that streamlines the process of [core user problem: e.g., managing orders, generating invoices, handling bookings, etc.]. It allows users to perform CRUD operations, verify payments, manage multiple entities (customers/owners/branches), and see real-time status updates. The system is built to be responsive, modular, and extendable.

**Plain English (Non-technical):**  
PEBL helps users easily create, track, and manage orders or bookings. Whether you’re a customer placing a preorder or an owner overseeing multiple branches, you can see what’s happening, confirm payments, and keep everything organized without manual paperwork. It’s built so even someone without technical knowledge can use it to handle day-to-day operations smoothly.

## 3. Tech Stack Used

- **Frontend:** React.js  
- **Backend / API:** Node.js + Express  
- **Database:** PostgreSQL  
- **Authentication/Authorization:** (if applicable, e.g., JWT or session-based)  
- **State Management:** (e.g., React context / Redux / local state)  
- **Deployment / Environment:** (e.g., dotenv for config, any hosting platform if used)  
- **Utilities / Others:**  
  - Sorting & filtering components  
  - Real-time/cart sync logic  
  - Payment verification via QR or similar  
  - Invoice generation logic with dynamic tax/SAC handling  

## 4. Application Flow

1. **User/Owner Signup & Login**  
   - Owners register and manage multiple branches.  
   - Customers or internal users log in to place or track orders.

2. **Entity Setup**  
   - Owners add branches, menus/items, and configure availability.  
   - Admin or biller profiles created as needed.

3. **Order / Preorder Creation**  
   - Customers select items, customize, and add to cart.  
   - Preorder is created and payment is initiated.

4. **Payment Verification**  
   - Payment is done; verification occurs via QR scan or integrated flow.  
   - Once payment is confirmed, the corresponding order status updates.

5. **Invoice / Bill Generation**  
   - Invoice is built by selecting services (e.g., items, charges).  
   - SAC code-based tax calculation applies appropriate taxes.  
   - Final bill can be marked paid, triggering downstream updates (e.g., ticket/payment status).

6. **Real-time Status & Data Handling**  
   - Paid status cascades (e.g., marking related tickets/services as paid).  
   - Sorting/filtering allows quick access to relevant orders, bills, or entities.

7. **Administration & Reporting**  
   - Owners or admins view dashboards, search/filter historic bills, and manage service configurations.

## 5. Installation

```bash
# Clone the repo
git clone https://github.com/sidjain1387/PEBL_PROJECT.git
cd PEBL_PROJECT

# Backend setup
cd server
npm install
npm run migrate 
npm start  

# Frontend setup
cd ../client
npm install
npm start
```
