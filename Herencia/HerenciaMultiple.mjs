class Padre {
  metodoClaseAbstracta1() {
    console.log("Método de la Clase Padre");
  }
}

class Madre {
  metodoClaseAbstracta2() {
    console.log("Método de la Clase Madre");
  }
}

class GeneticaPadreMadre {
  constructor() {
    this.claseAbstracta1 = new Padre();
    this.claseAbstracta2 = new Madre();
  }

  metodoClaseAbstracta1() {
    this.claseAbstracta1.metodoClaseAbstracta1();
  }

  metodoClaseAbstracta2() {
    this.claseAbstracta2.metodoClaseAbstracta2();
  }

  metodoCombinado() {
    console.log("Método que combina funcionalidades");
  }
}

class Hijo extends GeneticaPadreMadre {
  metodoClaseFinal() {
    console.log("Método de la Clase Final");
  }
}

let objetoFinal = new Hijo();
objetoFinal.metodoClaseAbstracta1();
objetoFinal.metodoClaseAbstracta2();
objetoFinal.metodoCombinado();
objetoFinal.metodoClaseFinal();
