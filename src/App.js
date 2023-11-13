import ChristmasController from "./controllers/ChristmasController.js";

class App {
  #christmasController

  constructor() {
    this.#christmasController = new ChristmasController();
  }
  async run() {
    await this.#christmasController.run();
  }
}

const app = new App();
app.run();

export default App;
