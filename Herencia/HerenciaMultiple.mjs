class Padre {
  #name;

  constructor(name) {
    this.#name = name;
  }

  getPadreName() {
    return this.#name;
  }
}

class Madre {
  #name;

  constructor(name) {
    this.#name = name;
  }

  getMadreName() {
    return this.#name;
  }
}

class Hijo {
  #name;
  #padre;
  #madre;

  constructor(name, padre, madre) {
    this.#name = name;
    this.#padre = padre;
    this.#madre = madre;
  }

  getHijoName() {
    return this.#name;
  }

  getPadre() {
    return this.#padre;
  }

  getMadre() {
    return this.#madre;
  }
}

const padre1 = new Padre("Jesus");
const madre1 = new Madre("Magdalena");

let john = new Hijo("John", padre1, madre1);



console.log(john.getHijoName());
console.log(john.getPadre().getPadreName());
console.log(john.getMadre().getMadreName());
