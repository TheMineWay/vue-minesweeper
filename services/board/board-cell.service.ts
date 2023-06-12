export class BoardCell {
  private constructor(
    public readonly hasMine: boolean,
    public isFlagged: boolean = false,
    public revealed: boolean = false
  ) {}

  public isRevealed = () => this.revealed;
  public reveal = () => (this.revealed = true);

  public setFlag = (flag: boolean = true) => (this.isFlagged = flag);
  public swapFlag = () => this.setFlag(!this.isFlagged);

  public minesAround = (board: BoardCell[][], x: number, y: number) => {
    let count = 0;

    const freeLeft = x > 0;
    const freeRight = x + 1 < board.length;

    const freeTop = y > 0;
    const freeBottom = y + 1 < board[x].length;

    // Horizontal check
    if (freeLeft && board[x - 1][y].hasMine) count++;
    if (freeRight && board[x + 1][y].hasMine) count++;

    // Vertical check
    if (freeTop && board[x][y - 1].hasMine) count++;
    if (freeBottom && board[x][y + 1].hasMine) count++;

    // Corners
    if (freeLeft && freeTop && board[x - 1][y - 1].hasMine) count++;
    if (freeLeft && freeBottom && board[x - 1][y + 1].hasMine) count++;
    if (freeRight && freeTop && board[x + 1][y - 1].hasMine) count++;
    if (freeRight && freeBottom && board[x + 1][y + 1].hasMine) count++;

    return count;
  };

  public static CreateMine = () => new BoardCell(true);
  public static CreateEmpty = () => new BoardCell(false);
}
