class Animal {
    constructor(nombre) {
        this.nombre = nombre;
    }
    hacerSonido() {
        console.log("El animal hace un sonido");
    }
}

class Perro extends Animal{}
const miPerro = new Perro('Toby');
const miAnimal = new Animal('Lucero');
miPerro.hacerSonido();
miAnimal.hacerSonido();