class Smartphone {
  constructor(marca, modelo, precio) {
    this.marca = marca;
    this.modelo = modelo;
    this.precio = precio;
  }

  encender() {
    console.log(`${this.marca} encendido`);
  }

  mostrarPrecio() {
    console.log(`Precio publicado: $${this.precio}`);
  }

  apagar() {
    console.log(`${this.marca} apagado`);
  }
}

const equipoDemo = new Smartphone("Samsung", "Galaxy S24", 999);
equipoDemo.encender();
equipoDemo.mostrarPrecio();
equipoDemo.apagar();
