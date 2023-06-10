export class BoardCell {
  private constructor(
    private readonly hasMine: boolean,
    private readonly isFlagged: boolean = false
  ) {}

  public static CreateMine = () => new BoardCell(true);
  public static CreateEmpty = () => new BoardCell(false);
}
