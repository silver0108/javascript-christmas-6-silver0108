class App {
  #christmasController

  constructor() {
    this.#christmasController = new ChristmasController();
  }
  async run() {
    await this.#christmasController.run();
  }
}

export default App;
