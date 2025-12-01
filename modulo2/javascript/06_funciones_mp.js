console.log("FUNCIONES EN TIENDA DE CELULARES");

console.log("FORMA CLASICA");
function bienvenida() {
  console.log("Hola, revisa nuestras ofertas en celulares");
}
bienvenida();

console.log("FORMA CON PARAMETROS Y RETORNOS");
function aplicarDescuento(precio, descuento) {
  return precio - descuento;
}
let precioConDescuento = aplicarDescuento(950, 120);
console.log("Precio con descuento:", precioConDescuento);

console.log("FUNCIONES FLECHA");
const calcularImpuesto = (precio, iva = 0.12) => {
  return Number((precio * (1 + iva)).toFixed(2));
};
let totalConIVA = calcularImpuesto(830);
console.log("Total con IVA:", totalConIVA);

console.log("FUNCION RETORNO DIRECTO");
const calcularCuota = (monto) => Number((monto / 12).toFixed(2));
console.log("Cuota mensual de 12 meses:", calcularCuota(960));

console.log("FUNCION CON PARAMETROS POR DEFECTO");
function armarMensaje(
  cliente,
  saludo = "Hola",
  tienda = "tienda de celulares"
) {
  return `${saludo}, ${cliente}, bienvenido a la ${tienda}`;
}
let mensaje1 = armarMensaje("Francisco");
let mensaje2 = armarMensaje("Francisco", "Buenos días", "tienda online");
console.log(mensaje1);
console.log(mensaje2);

function etiquetaEnvio(prioridad) {
  if (prioridad) {
    return "express";
  } else {
    return "estandar";
  }
}
console.log(etiquetaEnvio(true));

function costoSeguro(valorEquipo, meses) {
  return Number((valorEquipo * 0.02 * meses).toFixed(2));
}
console.log("Seguro por 6 meses:", costoSeguro(800, 6));
