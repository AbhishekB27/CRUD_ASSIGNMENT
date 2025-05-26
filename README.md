# 🎓 Student Management App – MERN Stack Assignment

A full-stack web application to manage student records with CRUD functionality, built using React, Node.js, Express, and MongoDB.

---

## 🚀 Features

✅ Display student data in a table (Name, Email, Age)  
✅ Add new students via form  
✅ Edit student data inline (with visual highlights)  
✅ Update only when in edit mode  
✅ Delete student from UI and database  
✅ Clean and minimal UI  
✅ MongoDB Atlas / Local DB support  
✅ Bonus: Redux Saga for managing async API calls

---

## 🧰 Tech Stack

| Layer     | Technology                                                        |
| --------- | ----------------------------------------------------------------- |
| Frontend  | React.js, Redux, Redux-Saga, Axios, Tailwind CSS (or CSS Modules) |
| Backend   | Node.js, Express.js                                               |
| Database  | MongoDB (Atlas or Local)                                          |
| API Calls | Redux-Saga (I used redux-toolkit)                                 |

## 🌐 Environment Setup

### ⚙️ Backend

1. Navigate to the backend folder:

```bash
cd backend
```

2. `.env` file

```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/crud_app
```

3. Start the backend server:

```bash
npm run dev
```

> Runs at: `http://localhost:8080`

---

### 💻 Frontend

1. Navigate to the frontend folder:

```bash
cd frontend
```

2. `.env` file

```env
VITE_BACKEND_API_KEY=http://localhost:8080/api/v1
```

3. Start the frontend React app:

```bash
npm run dev
```

> Runs at: `http://localhost:5173`

---

## 📦 API Endpoints

| Method | Endpoint            | Description         |
| ------ | ------------------- | ------------------- |
| GET    | `/api/students`     | Fetch all students  |
| POST   | `/api/students`     | Add new student     |
| PATCH  | `/api/students/:id` | Update student info |
| DELETE | `/api/students/:id` | Delete a student    |

---

## 📌 Redux Saga (Bonus) - (I used redux-toolkit)

Redux Toolkit is used to handle async flows such as:

- Fetching students from the backend
- Creating, updating, and deleting students

---
