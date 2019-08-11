import GameContainer from "./components/GameContainer";
import App from "./App";

const app = new App(new GameContainer());

document.onkeydown = e => {
  app.onKeyDown(e);
};

app.start();
