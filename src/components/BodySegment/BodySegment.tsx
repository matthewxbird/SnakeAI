import Position from "../Position";

class BodySegment {
  private _width: number;
  private _colour: string;
  private _position: Position;

  constructor(width: number, colour: string, position: Position) {
    this._width = width;
    this._colour = colour;
    this._position = position;
  }

  public getPos(): Position {
    return this._position;
  }

  public setPos(pos: Position) {
    this._position = pos;
  }

  public move(x: number, y: number) {
    const currentX = this._position.GetX();
    const currentY = this._position.GetY();
    const newX = currentX + x;
    const newY = currentY + y;
    this._position.Set(newX, newY);
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

export default BodySegment;
