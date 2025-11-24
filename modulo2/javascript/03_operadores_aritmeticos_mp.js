console.log("OPERADORES EN OFERTAS DE CELULARES");

const precioLista = 950;
const descuento = 120;
const costo = 620;
const unidades = 3;

console.log("Precio final");
const precioFinal = precioLista - descuento;
console.log("Resultado:", precioFinal);

console.log("Margen por unidad");
const margen = precioFinal - costo;
console.log("Resultado:", margen);

console.log("Total por venta de multiples unidades");
const totalVenta = precioFinal * unidades;
console.log("Resultado:", totalVenta);

console.log("Promedio por unidad considerando combo");
const promedio = totalVenta / unidades;
console.log("Resultado:", promedio);

console.log("Modulo para empaques");
const modulo = unidades % 2;
console.log("Resultado:", modulo);

console.log("Potencia para puntos de fidelidad");
const puntos = unidades ** 2;
console.log("Resultado:", puntos);

console.log("Operadores Comparacion");
console.log("Es precio premium?", precioLista > 800);
console.log("Descuento cubre mas de 10%?", descuento >= (precioLista * 0.1));
console.log("Coincide costo exacto?", precioFinal === costo);
console.log("Precio diferente a costo?", precioFinal !== costo);

console.log("Operadores Logicos");
console.log("Hay stock y oferta activa", unidades > 0 && descuento > 0);
console.log("Hay stock o se puede preordenar", unidades > 0 || precioLista > 0);
console.log("Sin descuento", !(descuento > 0));
