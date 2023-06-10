export class BoardCell {
  private constructor(
    public readonly hasMine: boolean,
    public readonly isFlagged: boolean = false
  ) {}

  public static CreateMine = () => new BoardCell(true);
  public static CreateEmpty = () => new BoardCell(false);
}
