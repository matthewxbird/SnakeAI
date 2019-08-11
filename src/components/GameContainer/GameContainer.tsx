import Snake from "../Snake/Snake";
import Position from "../Position";

class GameContainer {
  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;

  private _snake: Snake;

  private height: number = 400;
  private width: number = 400;

  private xDir: number = 1;
  private yDir: number = 0;

  constructor() {
    this.canvas = document.getElementById("rootCanvas");
    this.canvas.width = this.width;
    this.canvas.height = this.height;
    this.ctx = this.canvas.getContext("2d");
    this._snake = new Snake(new Position(50, 50), 10, 2, "#f00");
  }

  public changeDirection(key: string) {
    console.log(key);
    switch (key) {
      case "ArrowUp":
      case "W":
      case "w":
        this.xDir = 0;
        this.yDir = -1;
        break;
      case "ArrowDown":
      case "S":
      case "s":
        this.xDir = 0;
        this.yDir = 1;
        break;
      case "ArrowLeft":
      case "A":
      case "a":
        this.xDir = -1;
        this.yDir = 0;
        break;
      case "ArrowRight":
      case "D":
      case "d":
        this.xDir = 1;
        this.yDir = 0;
        break;
    }
  }

  public update(): void {
    const existingPos = this._snake.getPos();
    const newX = existingPos.GetX() + this.xDir * this._snake.getSpeed();
    const newY = existingPos.GetY() + this.yDir * this._snake.getSpeed();
    this._snake.setPos(newX, newY);
    this.ensureBounds();
  }

  public ensureBounds(): void {
    if (this._snake.getPos().GetX() < 0) {
      this._snake.setPos(0, this._snake.getPos().GetY());
    }

    if (this._snake.getPos().GetY() < 0) {
      this._snake.setPos(this._snake.getPos().GetX(), 0);
    }

    let xLimit: number = this.width - this._snake.getWidth();

    if (this._snake.getPos().GetX() > xLimit) {
      this._snake.setPos(xLimit, this._snake.getPos().GetY());
    }

    let yLimit: number = this.height - this._snake.getWidth();

    if (this._snake.getPos().GetY() > yLimit) {
      this._snake.setPos(this._snake.getPos().GetX(), yLimit);
    }
  }

  public clearScreen(): void {
    this.ctx.clearRect(0, 0, this.width, this.height);
  }

  public draw(): void {
    this.clearScreen();
    this.drawSnake();
  }

  public drawSnake() {
    this._snake.draw(this.ctx);
  }
}

export default GameContainer;
