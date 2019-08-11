import SnakeGame from "./components/SnakeGame";
import App from "./App";

const app = new App(new SnakeGame());

document.onkeydown = e => {
  app.onKeyDown(e);
};

app.start();
