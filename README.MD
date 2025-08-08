---

# 🕹️ Game Dashboard – Real-Time Backend State Management

This project is a simple **Node.js + Express + Socket.IO** backend that manages the state of chess-like games and displays them in a **live-updating web UI**.

It demonstrates core concepts like:

- Backend **state management**
- **Event-driven architecture** (Observer Pattern)
- Real-time **WebSockets** with Socket.IO
- **Frontend–Backend communication**
- Dynamic UI updates

---

## 📦 Tech Stack

- **Backend**: Node.js, Express, TypeScript, Socket.IO
- **Frontend**: HTML, CSS, Socket.IO Client
- **Other**: EventEmitter for state update notifications

---

## 🧠 Features

- Centralized backend state with a `GameManager` class
- Simulates a new game every 5 seconds
- Simulates moves to random games every 7 seconds
- Real-time game state pushed to all connected clients
- Simple static dashboard UI displaying players and moves
- Console logging of backend state updates

---

## 📁 Project Structure

```
project-root/
│
├── src/
│   ├── store.ts       # GameManager class with state + pub-sub
│   ├── logger.ts      # Console logger that listens to game state updates
│   └── index.ts       # Express + Socket.IO server
│
├── public/
│   └── index.html     # Live-updating frontend UI
│
├── package.json
└── tsconfig.json`
```

---

## 🚀 Getting Started

### 1. Clone the Repo

```bash
git clone https://github.com/your-username/game-dashboard.git
cd game-dashboard
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run the Server (Dev Mode)

```bash
npx ts-node src/index.ts
```

Or, with `nodemon`:

```bash
npx nodemon src/index.ts
```

### 4. Open the App

Visit [http://localhost:3000](http://localhost:3000) in your browser.
You'll see a live dashboard of games and their moves.

---

## 🧩 How It Works

- `store.ts` holds all game data in memory.
- Any time a game or move is added, `GameManager` emits an `"update"` event.
- `logger.ts` listens to updates and logs the entire game list to the console.
- `index.ts` listens for `"update"` events and sends them to connected clients over Socket.IO.
- The frontend (`public/index.html`) connects to the server, listens to `"state"` events, and re-renders the UI in real time.

---

## 📚 Learnings

This project demonstrates:

- What **backend-managed state** means
- How to apply the **Observer Pattern** with `EventEmitter`
- How to use **WebSockets** (Socket.IO) to push updates to clients
- Clean architecture with separation of concerns (store, logger, server, UI)

---

## 🔧 Future Improvements

- Add move input from frontend
- Persist games to a database (e.g. MongoDB or PostgreSQL)
- Add REST API endpoints for CRUD operations
- Convert frontend to React or Vue
- Add authentication and user management

---

## 🧑‍💻 Author

**Raj Verma**
Built as a learning project to understand backend state management & real-time dashboards.

---
