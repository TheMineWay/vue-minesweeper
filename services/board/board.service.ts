import { BoardCell } from "./board-cell.service";

export class Board {
  private board: BoardCell[][];

  public constructor(
    private readonly width: number,
    private readonly height: number,
    private readonly mines: number = Math.ceil((10 * (height * width)) / 100) // 10% of mines
  ) {
    this.board = [];

    // Init board to empty values
    for (let x = 0; x < width; x++) {
      const row: BoardCell[] = [];
      for (let y = 0; y < height; y++) {
        row.push(BoardCell.CreateEmpty());
      }
      this.board.push(row);
    }

    // Place mines 💣
    const placedMines: [number, number][] = [];
    do {
      const x = Math.floor(Math.random() * width);
      const y = Math.floor(Math.random() * height);

      if (placedMines.some(([fx, fy]) => fx === x && fy === y)) continue;

      placedMines.push([x, y]);
      this.board[x][y] = BoardCell.CreateMine();
    } while (placedMines.length < mines);
  }
}
