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
      this._position.GetX(),
      this._position.GetY(),
      this._width,
      this._width
    );
  }
}

export default Cherry;
