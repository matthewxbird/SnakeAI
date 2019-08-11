import Snake from "../Snake/Snake";
import Position from "../Position";

class GameContainer {
  private _ctx: CanvasRenderingContext2D;

  private _snake: Snake;

  private _height: number;
  private _width: number;

  private _xDir: number = 1;
  private _yDir: number = 0;

  constructor() {
    const canvas: HTMLCanvasElement = document.getElementById(
      "rootCanvas"
    ) as HTMLCanvasElement;
    this._width = canvas.width;
    this._height = canvas.height;
    this._ctx = canvas.getContext("2d");
    this._snake = new Snake(new Position(50, 50), 10, 2);
  }

  public changeDirection(key: string) {
    switch (key) {
      case "ArrowUp":
      case "W":
      case "w":
        this._xDir = 0;
        this._yDir = -1;
        break;
      case "ArrowDown":
      case "S":
      case "s":
        this._xDir = 0;
        this._yDir = 1;
        break;
      case "ArrowLeft":
      case "A":
      case "a":
        this._xDir = -1;
        this._yDir = 0;
        break;
      case "ArrowRight":
      case "D":
      case "d":
        this._xDir = 1;
        this._yDir = 0;
        break;
    }
  }

  public update(): void {
    this._snake.move(this._xDir, this._yDir);
    this.checkDeath();
  }

  public checkDeath() {
    const snakePosition = this._snake.getPos();

    if (
      snakePosition.GetX() < 0 ||
      snakePosition.GetY() < 0 ||
      snakePosition.GetX() > this._width - this._snake.getWidth() ||
      snakePosition.GetY() > this._height - this._snake.getWidth()
    ) {
      this._snake.die();
    }
  }

  public clearScreen(): void {
    this._ctx.clearRect(0, 0, this._width, this._height);
  }

  public draw(): void {
    this.clearScreen();
    this.drawSnake();
  }

  public drawSnake() {
    this._snake.draw(this._ctx);
  }
}

export default GameContainer;
