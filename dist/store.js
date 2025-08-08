"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.g = exports.GameManager = void 0;
const events_1 = require("events");
class GameManager extends events_1.EventEmitter {
    constructor() {
        super(...arguments);
        this.games = [];
    }
    addGame(game) {
        this.games.push(game);
        this.emitUpdate();
    }
    addMove(gameId, move) {
        const game = this.games.find(g => g.id === gameId);
        if (game) {
            game.moves.push(move);
            this.emitUpdate();
        }
    }
    getGames() {
        return this.games;
    }
    emitUpdate() {
        // emit the full state to all listeners:
        this.emit("update", this.getGames());
    }
}
exports.GameManager = GameManager;
exports.g = new GameManager();
