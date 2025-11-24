class Dispositivo {
  constructor(nombre) {
    this.nombre = nombre;
  }
  encender() {
    console.log(`${this.nombre} encendiendo`);
  }
}

class Smartphone extends Dispositivo {
  constructor(nombre, marca) {
    super(nombre);
    this.marca = marca;
  }
  encender() {
    console.log(`${this.marca} encendiendo en red 5G`);
  }
}

const miSmartphone = new Smartphone("Edge 50", "Motorola");
const misAuriculares = new Dispositivo("Auriculares Bluetooth");

miSmartphone.encender();
misAuriculares.encender();
