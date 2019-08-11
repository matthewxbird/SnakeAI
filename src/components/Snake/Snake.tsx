import Position from "../Position";
import BodySegment from "../BodySegment";
import ColourGenerator from "../ColourGenerator";

class Snake {
  private _width: number;
  private _speed: number;
  private _bodySegments: Array<BodySegment>;
  private _startingSegments = 10;

  constructor(position: Position, width: number, speed: number) {
    this._width = width;
    this._speed = speed;

    this._bodySegments = new Array<BodySegment>();

    const colorGenerator = new ColourGenerator();

    for (let index = 0; index < this._startingSegments; index++) {
      const startingX = position.GetX() - this._width * index;
      const startingY = position.GetY();
      this._bodySegments.push(
        new BodySegment(
          this._width,
          colorGenerator.getRandomColor(),
          new Position(startingX, startingY)
        )
      );
    }
  }

  public getWidth() {
    return this._width;
  }

  public getSpeed() {
    return this._speed;
  }

  public getPos() {
    return this._bodySegments[0].getPos();
  }

  public move(xDir: number, yDir: number) {
    const x = xDir * this._width;
    const y = yDir * this._width;

    const headPos = this._bodySegments[0].getPos();
    let prevPosition = new Position(headPos.GetX(), headPos.GetY());
    this._bodySegments[0].move(x, y);

    for (let index = 1; index < this._bodySegments.length; index++) {
      const tempPrevPos = this._bodySegments[index].getPos();
      this._bodySegments[index].setPos(prevPosition);
      prevPosition = new Position(tempPrevPos.GetX(), tempPrevPos.GetY());
    }
  }

  public draw(context: CanvasRenderingContext2D) {
    this._bodySegments.forEach(segment => {
      segment.draw(context);
    });
  }
}

export default Snake;
