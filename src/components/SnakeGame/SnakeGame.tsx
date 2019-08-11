class SnakeGame {
  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;

  private snakeWidth: number = 10;
  private snakeSpeed: number = 2;

  private height: number = 100;
  private width: number = 100;

  private xLimit: number = this.width - this.snakeWidth;
  private yLimit: number = this.height - this.snakeWidth;

  private xPos: number = 50;
  private yPos: number = 50;

  constructor() {
    this.canvas = document.getElementById("rootCanvas");
    this.canvas.width = this.width;
    this.canvas.height = this.height;
    this.ctx = this.canvas.getContext("2d");
  }

  public move(key: string) {
    switch (key) {
      case "ArrowUp":
        this.moveUp();
        break;
      case "ArrowDown":
        this.moveDown();
        break;
      case "ArrowLeft":
        this.moveLeft();
        break;
      case "ArrowRight":
        this.moveRight();
        break;
    }
  }

  public moveUp() {
    if (this.yPos > 0) {
      this.yPos = this.yPos - this.snakeSpeed;
    } else {
      this.sideCollison();
    }
  }

  public moveDown() {
    if (this.yPos < this.yLimit) {
      this.yPos = this.yPos + this.snakeSpeed;
    } else {
      this.sideCollison();
    }
  }

  public moveLeft() {
    if (this.xPos > 0) {
      this.xPos = this.xPos - this.snakeSpeed;
    } else {
      this.sideCollison();
    }
  }

  public moveRight() {
    if (this.xPos < this.xLimit) {
      this.xPos = this.xPos + this.snakeSpeed;
    } else {
      this.sideCollison();
    }
  }

  public sideCollison() {
    console.log("Don't move");
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
