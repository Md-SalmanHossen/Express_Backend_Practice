
## 🍔 **1️⃣ Restaurant Menu Management System**

*Concept: খাবারের তালিকা (menu) manage করবে।*

### 🧾 CRUD Routes (7)

| Method | Route        | Description           |
| ------ | ------------ | --------------------- |
| POST   | `/foods`     | নতুন খাবার যোগ করা    |
| GET    | `/foods`     | সব খাবার দেখা         |
| GET    | `/foods/:id` | নির্দিষ্ট খাবার দেখা  |
| PUT    | `/foods/:id` | সব ইনফো আপডেট         |
| PATCH  | `/foods/:id` | আংশিক আপডেট           |
| DELETE | `/foods/:id` | নির্দিষ্ট খাবার ডিলিট |
| DELETE | `/foods`     | সব খাবার ডিলিট        |

### ⚙️ Feature Routes (10)

| Route                    | Description                                       |
| ------------------------ | ------------------------------------------------- |
| `/action/search`         | নাম বা category দিয়ে খোঁজা                        |
| `/action/filter`         | category / price range / availability দিয়ে filter |
| `/action/sort`           | price বা rating অনুযায়ী সাজানো                    |
| `/action/paginate`       | pagination logic                                  |
| `/action/topRated`       | rating highest খাবার গুলো                         |
| `/action/recommendation` | similar category সাজেস্ট করা                      |
| `/action/featured`       | শুধু featured খাবার লিস্ট করা                     |
| `/action/stats`          | total item, avg price, avg rating ইত্যাদি         |
| `/action/random`         | র‍্যান্ডম খাবার (daily special)                   |
| `/action/outOfStock`     | stock নাই এমন খাবার                               |

🧠 **Total Routes:** 17
**Main logic practice:** numeric filtering, category grouping, random selection, analytics

---

## 🏠 **2️⃣ Real Estate Listing API**

*Concept: বাড়ি/ফ্ল্যাটের লিস্টিং (rent/sale) manage করবে।*

### 🧾 CRUD Routes (7)

| Method | Route             | Description              |
| ------ | ----------------- | ------------------------ |
| POST   | `/properties`     | নতুন property যোগ        |
| GET    | `/properties`     | সব property দেখা         |
| GET    | `/properties/:id` | নির্দিষ্ট property দেখা  |
| PUT    | `/properties/:id` | পুরো update              |
| PATCH  | `/properties/:id` | আংশিক update             |
| DELETE | `/properties/:id` | নির্দিষ্ট property ডিলিট |
| DELETE | `/properties`     | সব property ডিলিট        |

### ⚙️ Feature Routes (10–11)

| Route                    | Description                                    |
| ------------------------ | ---------------------------------------------- |
| `/action/search`         | location / title দিয়ে খোঁজা                    |
| `/action/filter`         | price range, type (Rent/Sale), location filter |
| `/action/sort`           | price, rating, size অনুযায়ী sort               |
| `/action/paginate`       | pagination                                     |
| `/action/topRated`       | top rated properties                           |
| `/action/recommendation` | same location বা type এর property সাজেস্ট      |
| `/action/recent`         | নতুন property গুলো (by date)                   |
| `/action/available`      | শুধু available property                        |
| `/action/stats`          | average price, total listings, type count      |
| `/action/locationWise`   | location অনুযায়ী grouping                      |
| `/action/highValue`      | price > certain amount filter                  |

🧠 **Total Routes:** 18
**Main logic practice:** range filter, date-based sort, location grouping, analytics

---

## 👨‍💼 **3️⃣ Employee Management System**

*Concept: কোম্পানির কর্মচারীদের ডেটা ম্যানেজ করবে।*

### 🧾 CRUD Routes (7)

| Method | Route            | Description             |
| ------ | ---------------- | ----------------------- |
| POST   | `/employees`     | নতুন employee যোগ       |
| GET    | `/employees`     | সব employee দেখা        |
| GET    | `/employees/:id` | নির্দিষ্ট employee দেখা |
| PUT    | `/employees/:id` | পুরো update             |
| PATCH  | `/employees/:id` | আংশিক update            |
| DELETE | `/employees/:id` | নির্দিষ্ট delete        |
| DELETE | `/employees`     | সব employee delete      |

### ⚙️ Feature Routes (10–11)

| Route                    | Description                                    |
| ------------------------ | ---------------------------------------------- |
| `/action/search`         | name / designation / department দিয়ে খোঁজা     |
| `/action/filter`         | department / salary range / rating দিয়ে filter |
| `/action/sort`           | salary, rating, name অনুযায়ী sort              |
| `/action/paginate`       | প্রতি page এ নির্দিষ্ট employee                |
| `/action/topRated`       | top performers                                 |
| `/action/recommendation` | same department এর similar employees           |
| `/action/stats`          | avg salary, total employee, dept count         |
| `/action/byDept`         | department অনুযায়ী grouping                    |
| `/action/highSalary`     | salary threshold filter                        |
| `/action/newJoiners`     | recent joining date অনুযায়ী filter             |
| `/action/random`         | random employee (employee of the day 😄)       |

🧠 **Total Routes:** 18
**Main logic practice:** multiple filter conditions, grouping by department, random + stats + sorting.

---

## 🧩 Summary of All 3 Projects

| Project                | CRUD Routes | Feature Routes | Total  | Key Practice Logic                     |
| ---------------------- | ----------- | -------------- | ------ | -------------------------------------- |
| 🍔 Restaurant Menu     | 7           | 10             | **17** | category, numeric filter, avg, random  |
| 🏠 Real Estate         | 7           | 11             | **18** | range filter, grouping, date logic     |
| 👨‍💼 Employee Manager | 7           | 11             | **18** | salary range, grouping, recommendation |

---

