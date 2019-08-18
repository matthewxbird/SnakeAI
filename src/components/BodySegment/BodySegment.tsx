import Position from "../Position";

class BodySegment {
  private _width: number;
  private _colour: string;
  private _position: Position;
  private _isDead: boolean;

  constructor(width: number, colour: string, position: Position) {
    this._width = width;
    this._colour = colour;
    this._position = position;
  }

  public get Position(): Position {
    return this._position;
  }

  public setPos(pos: Position) {
    if (this._isDead) {
      return;
    }
    this._position = pos;
  }

  public die() {
    this._isDead = true;

    if (this._colour === "#f00") {
      this._colour = "#000";
    } else {
      this._colour = "#f00";
    }
  }

  public move(x: number, y: number) {
    if (this._isDead) {
      return;
    }

    const newX = this._position.X + x;
    const newY = this._position.Y + y;
    this._position.Set(newX, newY);
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
}

export default BodySegment;
