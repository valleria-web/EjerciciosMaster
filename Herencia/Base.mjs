class Padre {
    static casa; 
    #atribute;

    constructor(parameter) {
        Padre.casa = parameter; 
    }

    methodA() {
        console.log(`Padre - MetodA. Que tengo: ${Padre.casa}`);
    }

    methodB() {
        console.log(`Padre - MetodB. Metros Cuadrados: ${""}`);
    }

    methodC() {
        console.log(`Padre - MetodC. Metros Cuadrados del Terreno: ${""}`);
    }
}

class Hijo extends Padre {
    #metrosCuadrados;
    #terreno;
    #segundaCasa;

    constructor(metrosCuadrados, terreno, segundaCasa) {
        super(`${Padre.casa}`); 
        this.#metrosCuadrados = metrosCuadrados;
        this.#terreno = terreno;
        this.#segundaCasa = segundaCasa;
    }

    methodB() {
        console.log(`Hijo - Refina MetodB: Metros Cuadrados: ${this.#metrosCuadrados}`);
    }

    methodC() {
        console.log(`Hijo - Refina MetodC: Metros Cuadrados del Terreno: ${this.#terreno}`);
    }

    methodD() {
        console.log(`Hijo - Suma MetodD: Nueva Propiedad: ${this.#segundaCasa}`);
    }

    methodE() {
        console.log(`Hijo - Suma MetodE: Propiedad heredada: ${Padre.casa}`);
    }
}

let padre = new Padre("Casa de campo");
padre.methodA();
padre.methodB();
padre.methodC();

let hijo = new Hijo("1000mtrs", "1 Hectarea", "Casa en la Playa");
hijo.methodB();
hijo.methodC();
hijo.methodD();
hijo.methodE();

