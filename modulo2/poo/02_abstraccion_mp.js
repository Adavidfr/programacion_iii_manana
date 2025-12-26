class Cliente {
  constructor(nombre, presupuesto) {
    this.nombre = nombre;
    this.presupuesto = presupuesto;
  }

  puedeComprar(precio) {
    if (this.presupuesto >= precio) {
      console.log("Compra aprobada");
    } else {
      console.log("Presupuesto insuficiente");
    }
  }

  mostrar() {
    console.log(`${this.nombre} tiene un presupuesto de $${this.presupuesto}`);
  }
}

const sofia = new Cliente("Sofia", 1200);

sofia.puedeComprar(999);
sofia.mostrar();
