export class BoardCell {
  private revealed: boolean = false;

  private constructor(
    public readonly hasMine: boolean,
    public readonly isFlagged: boolean = false
  ) {}

  public isRevealed = () => this.revealed;
  public reveal = () => (this.revealed = true);

  public static CreateMine = () => new BoardCell(true);
  public static CreateEmpty = () => new BoardCell(false);
}
