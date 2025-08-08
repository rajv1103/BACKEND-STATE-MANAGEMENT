import { EventEmitter } from "events";

export interface Game {
  id: string;
  whitePlayer: string;
  blackPlayer: string;
  moves: string[];
}

export class GameManager extends EventEmitter {
  private games: Game[] = [];

  public addGame(game: Game) {
    this.games.push(game);
    this.emitUpdate();
  }

  public addMove(gameId: string, move: string) {
    const game = this.games.find(g => g.id === gameId);
    if (game) {
      game.moves.push(move);
      this.emitUpdate();
    }
  }

  public getGames(): Game[] {
    return this.games;
  }

  private emitUpdate() {
    // emit the full state to all listeners:
    this.emit("update", this.getGames());
  }
}

export const g = new GameManager();
