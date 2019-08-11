class Position {
  private _x: number;
  private _y: number;

  constructor(x: number, y: number) {
    this._x = x;
    this._y = y;
  }

  public Set(x: number, y: number): void {
    this._x = x;
    this._y = y;
  }

  public GetX(): number {
    return this._x;
  }

  public GetY(): number {
    return this._y;
  }
}

export default Position;
