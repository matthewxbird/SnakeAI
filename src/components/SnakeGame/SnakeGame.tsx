class SnakeGame {
  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;

  private snakeWidth: number = 10;
  private snakeSpeed: number = 2;

  private height: number = 400;
  private width: number = 400;

  private xLimit: number = this.width - this.snakeWidth;
  private yLimit: number = this.height - this.snakeWidth;

  private xPos: number = 50;
  private yPos: number = 50;

  private xDir: number = 1;
  private yDir: number = 0;

  constructor() {
    this.canvas = document.getElementById("rootCanvas");
    this.canvas.width = this.width;
    this.canvas.height = this.height;
    this.ctx = this.canvas.getContext("2d");
  }

  public changeDirection(key: string) {
    switch (key) {
      case "ArrowUp":
        this.xDir = 0;
        this.yDir = -1;
        break;
      case "ArrowDown":
        this.xDir = 0;
        this.yDir = 1;
        break;
      case "ArrowLeft":
        this.xDir = -1;
        this.yDir = 0;
        break;
      case "ArrowRight":
        this.xDir = 1;
        this.yDir = 0;
        break;
    }
  }

  public update(): void {
    this.xPos += this.xDir * this.snakeSpeed;
    this.yPos += this.yDir * this.snakeSpeed;

    this.ensureBounds();
  }

  public ensureBounds(): void {
    if (this.xPos < 0) {
      this.xPos = 0;
    }

    if (this.yPos < 0) {
      this.yPos = 0;
    }

    if (this.xPos > this.xLimit) {
      this.xPos = this.xLimit;
    }

    if (this.yPos > this.yLimit) {
      this.yPos = this.yLimit;
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
    this.ctx.fillRect(this.xPos, this.yPos, this.snakeWidth, this.snakeWidth);
  }
}

export default SnakeGame;
