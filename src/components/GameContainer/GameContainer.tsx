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
    if (this._snake.IsAlive) this._snake.move(this._xDir, this._yDir);

    if (this.checkDeath()) {
      this._snake.die();
      return;
    }

    if (this.checkCherryCollision()) {
      this._cherry = null;
    }

    this.generateCherry();
  }

  public generateCherry() {
    if (!this._cherry) {
      this._cherry = new Cherry(
        Randomiser.getRandomPosition(0, 0, this._width - 20, this._height - 20)
      );
    }
  }

  public checkDeath(): boolean {
    const wallCollide = this.checkWallCollision();
    const snakeCollide = this.checkSnakeCollision();

    if (wallCollide || snakeCollide) {
      return true;
    }

    return false;
  }

  private checkSnakeCollision() {
    let collisionDetected: boolean = false;
    //Check collision with the snake or any part of its sbody
    const snakeHeadLeft = this._snake.Position.X;
    const snakeHeadRight = this._snake.Position.X + this._snake.Width;
    const snakeHeadTop = this._snake.Position.Y;
    const snakeHeadBottom = this._snake.Position.Y + this._snake.Width;

    this._snake.Body.forEach(segment => {
      const bodyLeft = segment.Position.X;
      const bodyRight = segment.Position.X + this._snake.Width;
      const bodyTop = segment.Position.Y;
      const bodyBottom = segment.Position.Y + this._snake.Width;

      if (
        bodyLeft >= snakeHeadLeft &&
        bodyRight <= snakeHeadRight &&
        bodyTop >= snakeHeadTop &&
        bodyBottom <= snakeHeadBottom
      ) {
        collisionDetected = true;
        return;
      }
    });

    return collisionDetected;
  }

  private checkCherryCollision(): boolean {
    if (this._snake === null || this._cherry == null) {
      return false;
    }

    const snakeLeft = this._snake.Position.X;
    const snakeRight = this._snake.Position.X + this._snake.Width;
    const snakeTop = this._snake.Position.Y;
    const snakeBottom = this._snake.Position.Y + this._snake.Width;

    const cherryLeft = this._cherry.Position.X;
    const cherryRight = this._cherry.Position.X + this._cherry.Width;
    const cherryTop = this._cherry.Position.Y;
    const cherryBottom = this._cherry.Position.Y + this._cherry.Width;

    return !(
      cherryLeft > snakeRight ||
      cherryRight < snakeLeft ||
      cherryTop > snakeBottom ||
      cherryBottom < snakeTop
    );
  }

  private checkWallCollision(): boolean {
    if (
      this._snake.Position.X < 0 ||
      this._snake.Position.Y < 0 ||
      this._snake.Position.X > this._width - this._snake.Width ||
      this._snake.Position.Y > this._height - this._snake.Width
    ) {
      return true;
    }

    return false;
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
    if (this._cherry) {
      this._cherry.draw(this._ctx);
    }
  }

  public drawSnake() {
    this._snake.draw(this._ctx);
  }
}

export default GameContainer;
