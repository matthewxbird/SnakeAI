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

  public get X(): number {
    return this._x;
  }

  public get Y(): number {
    return this._y;
  }
}

export default Position;
