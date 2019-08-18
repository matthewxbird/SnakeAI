import Position from "../Position";

class Cherry {
  private _position: Position;
  private _colour: string = "#f00";
  private _width: number = 10;

  constructor(position: Position) {
    this._position = position;
  }

  public draw(context: CanvasRenderingContext2D) {
    context.fillStyle = this._colour;
    context.fillRect(
      this._position.X,
      this._position.Y,
      this._width,
      this._width
    );
  }

  public get Position(): Position {
    return this._position;
  }
}

export default Cherry;
