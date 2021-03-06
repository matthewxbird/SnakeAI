import Position from "../Position";
import BodySegment from "../BodySegment";
import Randomiser from "../Randomiser";

class Snake {
  private _width: number;
  private _speed: number;
  private _bodySegments: Array<BodySegment>;
  private _startingSegments = 3;
  private _dead: boolean = false;

  constructor(position: Position, width: number, speed: number) {
    this._width = width;
    this._speed = speed;

    this._bodySegments = new Array<BodySegment>();

    for (let index = 0; index < this._startingSegments; index++) {
      const startingX = position.X - this._width * index;
      const startingY = position.Y;
      this._bodySegments.push(
        new BodySegment(
          this._width,
          Randomiser.getRandomColor(),
          new Position(startingX, startingY)
        )
      );
    }
  }

  public get IsAlive() {
    return !this._dead;
  }

  public get Width() {
    return this._width;
  }

  public get Speed() {
    return this._speed;
  }

  public get Head() {
    return this._bodySegments[0];
  }

  public get Body() {
    return this._bodySegments.slice(1);
  }

  public eat() {
    const currentLastSegmentsPosition = this._bodySegments[
      this._bodySegments.length - 1
    ].Position;
    this._bodySegments.push(
      new BodySegment(
        this._width,
        Randomiser.getRandomColor(),
        currentLastSegmentsPosition
      )
    );

    console.log("Body length is now " + this._bodySegments.length);
  }

  public die() {
    this._dead = true;
    this._bodySegments.forEach(segment => {
      segment.die();
    });
  }

  public move(xDir: number, yDir: number) {
    const x = xDir * this._width;
    const y = yDir * this._width;

    const headPos = this._bodySegments[0].Position;
    let prevPosition = new Position(headPos.X, headPos.Y);
    this._bodySegments[0].move(x, y);

    for (let index = 1; index < this._bodySegments.length; index++) {
      const tempPrevPos = this._bodySegments[index].Position;
      this._bodySegments[index].setPos(prevPosition);
      prevPosition = new Position(tempPrevPos.X, tempPrevPos.Y);
    }
  }

  public draw(context: CanvasRenderingContext2D) {
    this._bodySegments.forEach(segment => {
      segment.draw(context);
    });
  }
}

export default Snake;
