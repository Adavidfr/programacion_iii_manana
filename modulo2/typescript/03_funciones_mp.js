// funciones para precios de celulares
function saludarCliente(nombre) {
    return "Hola ".concat(nombre, ", bienvenido a la tienda de celulares");
}
console.log(saludarCliente('Francisco'));
// funcion flecha
var calcularPrecioConImpuesto = function (precio, iva) {
    if (iva === void 0) { iva = 0.12; }
    return Number((precio * (1 + iva)).toFixed(2));
};
console.log(calcularPrecioConImpuesto(950, 0.12));
function anunciarCuotas() {
    console.log("Activando cuotas sin intereses");
    console.log("Recuerda agregar seguro de pantalla");
}
anunciarCuotas();
function calcularCuotaMensual(precio, meses) {
    return Number((precio / meses).toFixed(2));
}
function totalAccesorios() {
    var precios = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        precios[_i] = arguments[_i];
    }
    return precios.reduce(function (acc, valor) { return acc + valor; }, 0);
}
console.log(calcularCuotaMensual(1200, 12));
console.log(totalAccesorios(25, 30, 15));
