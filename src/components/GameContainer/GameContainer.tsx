import Snake from "../Snake/Snake";
import Position from "../Position";
import Cherry from "../Cherry";
import Randomiser from "../Randomiser/Randomiser";

class GameContainer {
  private _ctx: CanvasRenderingContext2D;

  private _snake: Snake;

  private _height: number;
  private _width: number;

  private _xDir: number = 1;
  private _yDir: number = 0;

  private _cherry: Cherry;

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
        if (this._yDir !== 1) {
          this._yDir = -1;
          this._xDir = 0;
        }
        break;
      case "ArrowDown":
      case "S":
      case "s":
        if (this._yDir !== -1) {
          this._yDir = 1;
          this._xDir = 0;
        }
        break;
      case "ArrowLeft":
      case "A":
      case "a":
        if (this._xDir !== 1) {
          this._xDir = -1;
          this._yDir = 0;
        }
        break;
      case "ArrowRight":
      case "D":
      case "d":
        if (this._xDir !== -1) {
          this._xDir = 1;
          this._yDir = 0;
        }
        break;
    }
  }

  public update(): void {
    this._snake.move(this._xDir, this._yDir);
    this.checkDeath();
    this.generateCherry();
  }

  public generateCherry() {
    if (!this._cherry) {
      this._cherry = new Cherry(
        Randomiser.getRandomPosition(0, 0, this._width - 20, this._height - 20)
      );
    }
  }

  public checkDeath(): void {
    if (
      this._snake.Position.X < 0 ||
      this._snake.Position.Y < 0 ||
      this._snake.Position.X > this._width - this._snake.getWidth() ||
      this._snake.Position.Y > this._height - this._snake.getWidth()
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
    this.drawCherry();
  }

  public drawCherry() {
    this._cherry.draw(this._ctx);
  }

  public drawSnake() {
    this._snake.draw(this._ctx);
  }
}

export default GameContainer;
