function createInterval(min, max) {
    return {
      min: min,
      max: max,

      write: function () {
        console.log(this.min, this.max);
      }
    }
}

// Crear un intervalo usando la función createInterval
const myInterval = createInterval(1, 5);

// Llamar al método write del objeto intervalo
myInterval.write();