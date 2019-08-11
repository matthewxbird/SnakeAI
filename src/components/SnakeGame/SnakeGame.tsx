import Snake from "../Snake/Snake";

class SnakeGame {
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
    this._snake = new Snake();
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
    this._snake.xPos += this.xDir * this._snake.speed;
    this._snake.yPos += this.yDir * this._snake.speed;

    this.ensureBounds();
  }

  public ensureBounds(): void {
    if (this._snake.xPos < 0) {
      this._snake.xPos = 0;
    }

    if (this._snake.yPos < 0) {
      this._snake.yPos = 0;
    }

    let xLimit: number = this.width - this._snake.width;

    if (this._snake.xPos > xLimit) {
      this._snake.xPos = xLimit;
    }

    let yLimit: number = this.height - this._snake.width;

    if (this._snake.yPos > yLimit) {
      this._snake.yPos = yLimit;
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
    this.ctx.fillStyle = "#f00";
    this.ctx.fillRect(
      this._snake.xPos,
      this._snake.yPos,
      this._snake.width,
      this._snake.width
    );
  }
}

export default SnakeGame;
