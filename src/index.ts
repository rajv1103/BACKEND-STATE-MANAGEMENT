import express from "express";
import http from "http";
import { Server as SocketIOServer } from "socket.io";
import { g } from "./store";
import { startLogger } from "./logger";

startLogger();

const app = express();
const server = http.createServer(app);
const io = new SocketIOServer(server);

// Serve static files from `public/`
app.use(express.static("public"));

io.on("connection", socket => {
  // Send current state on connect
  socket.emit("state", g.getGames());

  // Forward future updates
  const onUpdate = (state: any) => socket.emit("state", state);
  g.on("update", onUpdate);

  socket.on("disconnect", () => {
    g.off("update", onUpdate);
  });
});

// Simulate a new game every 5s
setInterval(() => {
  g.addGame({
    id: Math.random().toString(36).substr(2),
    whitePlayer: "RAHUL",
    blackPlayer: "OM",
    moves: []
  });
}, 5000);

// ─── simulate random moves ───
const sampleMoves = ["e4", "d4", "Nf3", "c4", "g3", "Bb5"];
setInterval(() => {
  const games = g.getGames();
  if (!games.length) return;

  const game = games[Math.floor(Math.random() * games.length)];
  const move = sampleMoves[Math.floor(Math.random() * sampleMoves.length)];
  g.addMove(game.id, move);
}, 7000);

server.listen(3000, () => {
  console.log("🚀 Listening on http://localhost:3000");
});
