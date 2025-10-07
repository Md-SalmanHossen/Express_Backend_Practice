Bujhte perechi ✅
Tumi **bank management system** practice korte chau MongoDB + REST API + Multer diye — without authentication.
Tumi chaicho **project structure, model count, API count** ta jate tumi nijer haate code korte paro.

Tumi jate large practice pete paro, ami medium–large size er version ta dichi 👇

---

## 🏦 **Bank Management System (Without Auth)**

### **Goal:** REST API + MongoDB CRUD + Multer + Relationship practice

---

## 🔹 **Models (5 total)**

1. **Customer Model**

   * name
   * email
   * phone
   * address
   * profileImage (multer upload)
   * createdAt

2. **Account Model**

   * customerId (ref → Customer)
   * accountNumber
   * accountType (Savings / Current / Fixed)
   * balance
   * branchName
   * createdAt

3. **Transaction Model**

   * accountId (ref → Account)
   * type (Deposit / Withdraw / Transfer)
   * amount
   * date
   * note

4. **Branch Model**

   * branchName
   * branchCode
   * address
   * contactNumber
   * managerName

5. **Loan Model**

   * customerId (ref → Customer)
   * loanType (Home / Car / Personal)
   * amount
   * interestRate
   * duration (months)
   * status (Approved / Pending / Rejected)

---

## 🔹 **REST API Endpoints (Total ≈ 25+)**

### **1️⃣ Customer Routes**

| Method | Route            | Description                             |
| ------ | ---------------- | --------------------------------------- |
| POST   | `/customers`     | Create new customer (with multer image) |
| GET    | `/customers`     | Get all customers                       |
| GET    | `/customers/:id` | Get single customer                     |
| PUT    | `/customers/:id` | Update customer details                 |
| DELETE | `/customers/:id` | Delete customer                         |

---

### **2️⃣ Account Routes**

| Method | Route                            | Description                    |
| ------ | -------------------------------- | ------------------------------ |
| POST   | `/accounts`                      | Create account for a customer  |
| GET    | `/accounts`                      | Get all accounts               |
| GET    | `/accounts/:id`                  | Get account details            |
| PUT    | `/accounts/:id`                  | Update account info            |
| DELETE | `/accounts/:id`                  | Delete account                 |
| GET    | `/accounts/customer/:customerId` | Get all accounts of a customer |

---

### **3️⃣ Transaction Routes**

| Method | Route                              | Description                          |
| ------ | ---------------------------------- | ------------------------------------ |
| POST   | `/transactions/deposit`            | Deposit amount                       |
| POST   | `/transactions/withdraw`           | Withdraw amount                      |
| POST   | `/transactions/transfer`           | Transfer amount between accounts     |
| GET    | `/transactions`                    | Get all transactions                 |
| GET    | `/transactions/:id`                | Get transaction details              |
| GET    | `/transactions/account/:accountId` | Get all transactions for one account |

---

### **4️⃣ Branch Routes**

| Method | Route           | Description        |
| ------ | --------------- | ------------------ |
| POST   | `/branches`     | Create new branch  |
| GET    | `/branches`     | Get all branches   |
| GET    | `/branches/:id` | Get single branch  |
| PUT    | `/branches/:id` | Update branch info |
| DELETE | `/branches/:id` | Delete branch      |

---

### **5️⃣ Loan Routes**

| Method | Route                         | Description                   |
| ------ | ----------------------------- | ----------------------------- |
| POST   | `/loans`                      | Apply for loan                |
| GET    | `/loans`                      | Get all loans                 |
| GET    | `/loans/:id`                  | Get single loan               |
| PUT    | `/loans/:id`                  | Update loan status            |
| DELETE | `/loans/:id`                  | Delete loan record            |
| GET    | `/loans/customer/:customerId` | Get all loans of one customer |

---

## 🔹 **Multer Use**

* For **Customer profileImage**
* Optionally for **Branch document uploads** (like branch license image)

---

## 🔹 **Practice Targets**

| Topic                 | Practice Focus                                             |
| --------------------- | ---------------------------------------------------------- |
| MongoDB Relationships | Customer → Account, Account → Transaction, Customer → Loan |
| CRUD                  | Every model full CRUD                                      |
| File Upload           | Multer with validation                                     |
| Pagination & Filter   | In `/accounts` and `/transactions`                         |
| Search                | Customer name, email search                                |
| Sorting               | Transaction by latest or amount                            |

---

## ✅ **Bonus Practice Ideas**

1. Add **computed balance update** after each transaction.
2. Create **aggregate query** to show total deposits per branch.
3. Add **loan interest calculation** using Mongoose virtuals.
4. Use `.populate()` to fetch related data (like customer info inside account).
5. Add query parameters like `/transactions?type=Deposit&limit=5&sort=-date`

---

Tumi jodi chao ami ei structure er ekta **ER diagram** (MongoDB relationship map) draw kore dite pari — jate tumi first schema design kore, tarpor REST API likhte paro.

👉 **Chao ami oi diagram ta banai?**
