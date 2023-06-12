export class BoardCell {
  private revealed: boolean = false;

  private constructor(
    public readonly hasMine: boolean,
    public isFlagged: boolean = false
  ) {}

  public isRevealed = () => this.revealed;
  public reveal = () => (this.revealed = true);

  public setFlag = (flag: boolean = true) => (this.isFlagged = flag);
  public swapFlag = () => this.setFlag(!this.isFlagged);

  public static CreateMine = () => new BoardCell(true);
  public static CreateEmpty = () => new BoardCell(false);
}
