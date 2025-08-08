
---

# 🕹️ Game Dashboard – Real-Time Backend State Management

A lightweight **Node.js + Express + Socket.IO** backend that manages the state of chess-like games and displays them in a **live-updating web UI**.

This project showcases key backend concepts such as:

- ✅ **State management** using a centralized store  
- ⚡ **Event-driven architecture** via the Observer Pattern  
- 🔄 **Real-time communication** with Socket.IO  
- 🔗 **Frontend–Backend synchronization**  
- 🧩 **Dynamic UI updates** based on backend events  

---

## 📦 Tech Stack

| Layer      | Technologies Used                          |
|------------|---------------------------------------------|
| **Backend**| Node.js, Express, TypeScript, Socket.IO     |
| **Frontend**| HTML, CSS, Socket.IO Client                |
| **Utilities**| Node.js `EventEmitter` for pub-sub updates|

---

## 🧠 Features

- Centralized game state managed by a `GameManager` class  
- Simulates a new game every **5 seconds**  
- Simulates random moves every **7 seconds**  
- Pushes real-time game state to all connected clients  
- Simple static dashboard UI showing players and moves  
- Console logs of backend state updates for debugging  

---

## 📁 Project Structure

```
project-root/
│
├── src/
│   ├── store.ts       # GameManager class with state + pub-sub
│   ├── logger.ts      # Logs game state updates to console
│   └── index.ts       # Express + Socket.IO server setup
│
├── public/
│   └── index.html     # Live-updating frontend dashboard
│
├── package.json
└── tsconfig.json
```

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/game-dashboard.git
cd game-dashboard
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run the Server (Development Mode)

Using `ts-node`:

```bash
npx ts-node src/index.ts
```

Or with `nodemon` for auto-reloading:

```bash
npx nodemon src/index.ts
```

### 4. View the Dashboard

Open your browser and visit:  
👉 [http://localhost:3000](http://localhost:3000)

---

## 🧩 How It Works

- `store.ts`: Maintains in-memory game data and emits `"update"` events on changes  
- `logger.ts`: Subscribes to updates and logs the current game state  
- `index.ts`: Sets up the server and broadcasts updates to clients via Socket.IO  
- `index.html`: Connects to the backend, listens for `"state"` events, and re-renders the UI in real time  

---

## 📚 Learnings

This project helped reinforce:

- 🧠 Backend-managed state and its benefits  
- 🔁 Observer Pattern using Node.js `EventEmitter`  
- 🌐 WebSocket communication with Socket.IO  
- 🧼 Clean architecture with separation of concerns  

---

## 🔧 Future Improvements

- Enable move input from the frontend  
- Persist game data using MongoDB or PostgreSQL  
- Add RESTful API endpoints for CRUD operations  
- Migrate frontend to React or Vue for better scalability  
- Implement authentication and user management  

---

## 👨‍💻 Author

**Raj Verma**  
Built as a hands-on learning project to explore backend state management and real-time dashboards.

---

