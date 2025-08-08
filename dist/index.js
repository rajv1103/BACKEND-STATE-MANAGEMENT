"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const http_1 = __importDefault(require("http"));
const socket_io_1 = require("socket.io");
const store_1 = require("./store");
const logger_1 = require("./logger");
(0, logger_1.startLogger)();
const app = (0, express_1.default)();
const server = http_1.default.createServer(app);
const io = new socket_io_1.Server(server);
// Serve static files from `public/`
app.use(express_1.default.static("public"));
io.on("connection", socket => {
    // Send current state on connect
    socket.emit("state", store_1.g.getGames());
    // Forward future updates
    const onUpdate = (state) => socket.emit("state", state);
    store_1.g.on("update", onUpdate);
    socket.on("disconnect", () => {
        store_1.g.off("update", onUpdate);
    });
});
// Simulate a new game every 5s
setInterval(() => {
    store_1.g.addGame({
        id: Math.random().toString(36).substr(2),
        whitePlayer: "raj",
        blackPlayer: "vikas",
        moves: []
    });
}, 5000);
// ─── simulate random moves ───
const sampleMoves = ["e4", "d4", "Nf3", "c4", "g3", "Bb5"];
setInterval(() => {
    const games = store_1.g.getGames();
    if (!games.length)
        return;
    const game = games[Math.floor(Math.random() * games.length)];
    const move = sampleMoves[Math.floor(Math.random() * sampleMoves.length)];
    store_1.g.addMove(game.id, move);
}, 7000);
server.listen(3000, () => {
    console.log("🚀 Listening on http://localhost:3000");
});
