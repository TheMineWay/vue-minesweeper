import { Board } from "../board/board.service";

export class Game {
  private board: Board;
  public constructor(width: number, height: number) {
    this.board = new Board(width, height);
  }

  public getBoard = () => this.board;
}
