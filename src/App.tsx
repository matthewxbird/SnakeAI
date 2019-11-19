import GameContainer from "./components/GameContainer";
import { isMainThread } from "worker_threads";

class App {
  private _instance: GameContainer;

  private allowTick: boolean = true;
  constructor(instance: GameContainer) {
    this._instance = instance;
  }

  public start() {
    setInterval(this.mainLoop.bind(this), 500);
    //this.mainLoop.bind(this);
  }

  public onKeyDown(e: KeyboardEvent) {
    // if (e.key === "Enter") {
    //   this.mainLoop();
    // }
    this._instance.changeDirection(e.key);
  }

  private mainLoop(): void {
    this._instance.update();
    this._instance.draw();
  }
}

export default App;
