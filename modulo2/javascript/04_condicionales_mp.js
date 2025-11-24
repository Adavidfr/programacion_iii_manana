let stock = 4;

if (stock > 10) {
    console.log("Hay suficiente inventario para la campaña");
} else if (stock >= 1) {
    console.log("Inventario limitado, mostrar unidades restantes");
} else {
    console.log("Sin stock, activar preorden");
}

let clienteVIP = true;
if (clienteVIP) {
    console.log("Aplicar envio gratis y seguro incluido");
} else {    
    console.log("Mostrar costo de envio estandar");
}

let calificacion = 4.6;
if (calificacion >= 4.5) {
    console.log("Modelo top en reseñas");
} else if (calificacion >= 4) {
    console.log("Modelo recomendado");
} else {
    console.log("Modelo a revisar");
}

let garantiaMeses = 24;
let incluyeSeguro = false;
if (garantiaMeses >= 24) {
    if (incluyeSeguro) {
        console.log("Garantia extendida con seguro de pantalla");
    } else {
        console.log("Garantia extendida basica");
    }
} else {
    console.log("Garantia estandar");
}

let metodoEntrega = "tienda";

switch (metodoEntrega) {
    case "tienda":
        console.log("Retiro en tienda disponible");
        break;
    case "domicilio":
        console.log("Programar entrega a domicilio");
        break;
    default:
        console.log("Coordinar punto de entrega");
}

let precioS24 = 950;
let precioPixel = 799;
let precioIphone = 1199;

if (precioIphone > precioS24 && precioIphone > precioPixel) {
    console.log("El precio mas alto es del iPhone");
} else if (precioS24 > precioIphone && precioS24 > precioPixel) {
    console.log("El precio mas alto es del Galaxy S24");
} else {
    console.log("El precio mas alto es del Pixel 9");
}
