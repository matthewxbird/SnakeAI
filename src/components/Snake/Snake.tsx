import Position from "../Position";

class Snake {
  private _width: number;
  private _speed: number;
  private _colour: string;
  private _position: Position;

  constructor(
    position: Position,
    width: number,
    speed: number,
    colour: string
  ) {
    this._position = position;
    this._width = width;
    this._speed = speed;
    this._colour = colour;
  }

  public getWidth() {
    return this._width;
  }

  public getSpeed() {
    return this._speed;
  }

  public getPos() {
    return this._position;
  }

  public setPos(x: number, y: number) {
    this._position.Set(x, y);
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

export default Snake;
