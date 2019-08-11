import SnakeGame from "./components/SnakeGame";

class App {
  private _instance: SnakeGame;

  constructor(instance: SnakeGame) {
    this._instance = instance;
  }

  public start() {
    setInterval(this.mainLoop.bind(this), 20);
  }

  public onKeyDown(e: KeyboardEvent) {
    this._instance.changeDirection(e.key);
  }

  private mainLoop(): void {
    this._instance.update();
    this._instance.draw();
  }
}

export default App;
