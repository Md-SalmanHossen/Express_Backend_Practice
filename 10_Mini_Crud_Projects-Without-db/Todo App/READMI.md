ঠিক আছে! আমি তোমার **detailed logic explanation** কে **README.md format** এ সাজিয়ে দিচ্ছি, যেন তুমি GitHub এ সরাসরি রাখতে পারো।

---

```markdown
# 📝 Todo List CRUD API (Express.js)

A simple **Todo API** built with **Node.js + Express.js**.  
This project implements **full CRUD operations**, with **security middleware** and proper **error handling**.  
Data is stored **in-memory (array)** for learning purposes.

---

## 🚀 Features
- Create a new Todo ✅
- Read all Todos 📖
- Read single Todo by ID 🔍
- Update Todo (PUT = full update, PATCH = partial update) ✏️
- Delete Todo 🗑️
- Middleware for:
  - Security (`helmet`, `hpp`, `cors`, `rate-limit`, `cookie-parser`)
  - Not Found route handler

---

## 📂 Project Structure
```

project-folder/
│── index.js
│── app.js
│── src/
│   ├── routes/
│   │   └── todoRoutes.js
│   └── controllers/
│       └── todoController.js
│── src/middleware/notFound.js
│── package.json
│── .env

````

---

## ⚙️ Installation & Run

```bash
# Clone repo
git clone <your-repo-link>

# Move into project
cd todo-crud-project

# Install dependencies
npm install

# Run project
npm start
````

Server runs at:
👉 `http://localhost:5000` (or your `.env` PORT)

---

## 📌 API Endpoints

**1️⃣ Create Todo (POST `/api/todos`)**

* Request Body:

```json
{
  "title": "Learn Express.js",
  "description": "Practice CRUD operations"
}
```

* Response:

```json
{
  "message": "Todo Create Successfully",
  "todo": {
    "id": 1001,
    "title": "Learn Express.js",
    "description": "Practice CRUD operations",
    "complete": false,
    "createdAt": "2025-10-02T15:00:00.000Z"
  }
}
```

**2️⃣ Read All Todos (GET `/api/todos`)**

* Response:

```json
{
  "count": 2,
  "todos": [
    { "id": 1001, "title": "Learn Express.js", "description": "Practice CRUD operations", "complete": false }
  ]
}
```

**3️⃣ Read Single Todo (GET `/api/todos/:id`)**

* Response if found:

```json
{
  "message": "Todo retrieved successfully",
  "todo": { "id": 1001, "title": "Learn Express.js", "description": "Practice CRUD operations" }
}
```

* Response if not found:

```json
{ "message": "Todo list not found" }
```

**4️⃣ Update Todo Full (PUT `/api/todos/:id`)**

* Request Body:

```json
{
  "title": "Learn Node.js",
  "description": "Deep dive backend",
  "complete": true
}
```

* Response:

```json
{
  "message": "Todo fully updated",
  "todo": {
    "id": 1001,
    "title": "Learn Node.js",
    "description": "Deep dive backend",
    "complete": true,
    "updatedAt": "2025-10-02T15:20:00.000Z"
  }
}
```

**5️⃣ Update Todo Partial (PATCH `/api/todos/:id`)**

* Request Body:

```json
{ "complete": true }
```

* Response:

```json
{
  "message": "Todo partially updated",
  "todo": {
    "id": 1001,
    "title": "Learn Express.js",
    "description": "Practice CRUD operations",
    "complete": true,
    "updatedAt": "2025-10-02T15:25:00.000Z"
  }
}
```

**6️⃣ Delete Todo (DELETE `/api/todos/:id`)**

* Response:

```json
{
  "message": "Todo deleted successfully",
  "deletedTodo": { "id": 1001, "title": "Learn Express.js" }
}
```

---

## 🧠 Logic Explanation (Step by Step)

### 1️⃣ In-memory Storage

```js
let todos = [];
let idIncrease = 1000;
```

* `todos` array stores all Todo items temporarily.
* `idIncrease` helps generate **unique IDs** for each Todo.

---

### 2️⃣ Create Todo

1. Extract `title` & `description` from `req.body`.
2. Check if **title exists**, else return 400.
3. Create new Todo object with:

   * `id` → unique
   * `title`, `description` → optional
   * `complete` → default `false`
   * `createdAt` → current timestamp
4. Push new Todo into `todos` array.
5. Return 201 response with new Todo.

---

### 3️⃣ Read All Todos

* Simply return the `todos` array and count.

---

### 4️⃣ Read Single Todo

1. Get `id` from URL params.
2. Convert to number using `parseInt()`.
3. Find Todo with matching ID.
4. Return 404 if not found, else return Todo.

---

### 5️⃣ Update Todo Full (PUT)

1. Get `id` & find index in `todos`.
2. Require **title** and **complete** fields.
3. Create updated object by merging existingTodo + new data.
4. Update array at the found index.
5. Add `updatedAt` timestamp.

**PUT = full replacement**.

---

### 6️⃣ Update Todo Partial (PATCH)

1. Get `id` & find index.
2. Merge only the fields provided in request.
3. Use optional chaining:

```js
...(title !== undefined && {title})
```

4. Update `updatedAt`.

**PATCH = update only given fields**.

---

### 7️⃣ Delete Todo

1. Find index by `id`.
2. If found → remove using `splice()`.
3. Return deleted Todo in response.

---

### 8️⃣ Middleware Logic

* **Security:** helmet, hpp, cors, rate-limit, cookie-parser
* **Body Parser:** express.json(), express.urlencoded()
* **Route Not Found:** returns 404 for invalid routes

---

### 9️⃣ Request Flow

```
Client
  |
  v
[Express Middleware]
  |
  v
[Router]
  |
  v
[Controller Logic]
  |
  v
[Response JSON]
```

---

### 🔟 Key Points

* Array storage → temporary, not persistent
* PUT → full update, PATCH → partial update
* Optional chaining → modern JS style
* Each Todo has: `id`, `title`, `description`, `complete`, `createdAt`, `updatedAt`

---
