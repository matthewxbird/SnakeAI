import SnakeGame from "./components/SnakeGame";

class App {
  private _instance: SnakeGame;

  constructor(instance: SnakeGame) {
    this._instance = instance;
  }

  public start() {
    setInterval(this.mainLoop.bind(this), 33);
  }

  public onKeyDown(e: KeyboardEvent) {
    this._instance.move(e.key);
  }

  private mainLoop(): void {
    this._instance.draw();
  }
}

export default App;
