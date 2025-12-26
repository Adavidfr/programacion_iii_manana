const modelos = ["Galaxy S24", "iPhone 16", "Pixel 9", "Moto Edge 50"];
for (let i = 0; i < modelos.length; i++) {
  console.log("Modelo:", modelos[i]);
}

console.log("Bucle While: cuotas pendientes");
let cuotas = 3;
while (cuotas > 0) {
  console.log("Cuotas por cobrar:", cuotas);
  cuotas--;
}

let entregas = ["Listo", "Empacado", "En camino", "Entregado"];
let indice = 0;
while (indice < entregas.length) {
  console.log("Estado de entrega:", entregas[indice]);
  indice++;
}

let unidades = 1;
while (unidades <= 5) {
  if (unidades % 2 === 0) {
    console.log("Unidad par para combos:", unidades);
  }
  unidades++;
}

let descuentos = [5, 10, 15, 20, 25];
let idx = 0;
let mayorDescuento = 0;
while (idx < descuentos.length) {
  if (descuentos[idx] > mayorDescuento) {
    mayorDescuento = descuentos[idx];
  }
  idx++;
}

console.log("Mayor descuento disponible:", mayorDescuento);
