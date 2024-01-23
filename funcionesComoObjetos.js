// funciones como objectos

//next = function () {
//    next.counter++;
//    return next.counter
//}
//next.counter = 0;
//next.reset = function() {
//    next.counter = 0;
//}//

//next();
//console.log(next)
//next();
//console.log(next)
//next();
//console.log(next)

// Ejemplo de cómo se podría reescribir esa funcionalidad utilizando el paradigma de objetos en JavaScript

// Definición de un objeto 'Counter'
const Counter = {
    counter: 0,
    next: function () {
        this.counter++;
        return this.counter;
    },
    reset: function () {
        this.counter = 0;
    }
};

// Uso del objeto 'Counter'
console.log(Counter.next()); // Devolverá 1
Counter.reset();
console.log(Counter.counter); 