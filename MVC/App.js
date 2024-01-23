import Model from "./Model.mjs";
import View from "./View.mjs";
import Controller from "./Controller.mjs";

class App {
  constructor() {
    const model = new Model();
    const view = new View();
    const controller = new Controller(model, view);
    console.log(model);
    view.displayData(model.getData());
  }
}

new App();