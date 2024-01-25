class RedFather {
  #name;
  children = [];
  static color = "#FF0000";
  
  constructor(name) {
    this.#name = name;
  }

  getFatherName() {
    return this.#name;
  }

  static getColor() {
    return RedFather.color;
  }
}

class BlueMother {
  #name;
  children = [];
  static color = "#0000FF";

  constructor(name) {
    this.#name = name;
  }

  getMotherName() {
    return this.#name;
  }

  static getColor() {
    return BlueMother.color;
  }
}

class PinkMother {
  #name;
  children = [];
  static color = "#FFC0CB";

  constructor(name) {
    this.#name = name;
  }

  getMotherName() {
    return this.#name;
  }

  static getColor() {
    return PinkMother.color;
  }
}


class Children {
  #name;
  #father;
  #mother;

  constructor(name, father, mother) {
    this.#name = name;
    this.#father = father;
    this.#mother = mother;
  }

  getChildrenName() {
    return this.#name;
  }

  getFather() {
    return this.#father;
  }

  getMother() {
    return this.#mother;
  }

  getColor() {
    let fatherColor = this.#father.constructor.getColor();
    let motherColor = this.#mother.constructor.getColor();

    const colorMix = parseInt(fatherColor.slice(1), 16) + parseInt(motherColor.slice(1), 16);

    const mixColorResult = Math.min(colorMix, 0xFFFFFF);

    const mixColor = '#' + mixColorResult.toString(16).padStart(6, '0');
    return mixColor;
  }
}

const padre1 = new RedFather("Jesus");
const madre1 = new BlueMother("Magdalena");
const madre2 = new PinkMother("PinkMother");

let john = new Children("John", padre1, madre1);
let ana = new Children("Ana", padre1, madre2);


console.log(john.getChildrenName());
console.log(john.getFather().getFatherName());
console.log(john.getMother().getMotherName());
console.log(john.getColor());

console.log(ana.getColor());
