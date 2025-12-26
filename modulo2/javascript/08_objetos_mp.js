console.log("OBJETOS DE CELULARES");
let telefono = {
    modelo: "Pixel 9",
    marca: "Google",
    precio: 799,
    color: "negro"
};

console.log(telefono);
console.log(telefono.modelo);
console.log(telefono.precio);
console.log(telefono["color"]);

console.log("Modificacion de una clave del objeto");
telefono.precio = 759;
console.log(telefono);

console.log("Incluir clave al objeto");
telefono.garantiaMeses = 24;
console.log(telefono);

console.log("Eliminar clave al objeto");
delete telefono.color;
console.log(telefono);

console.log("Recorrer un objeto");
for (let clave in telefono){
    console.log(clave);
};

console.log("Mostrar claves con Object.keys");
console.log(Object.keys(telefono));
console.log("Mostrar con Object.values");
console.log(Object.values(telefono));

console.log("Objetos Anidados");
let pedido = {
    cliente: "Sofia",
    total: 1699,
    equipos: [
        {
            modelo: "Galaxy S24",
            color: "azul",
            accesorios: ["funda", "protector de pantalla"]
        },
        {
            modelo: "Pixel 9",
            color: "negro",
            accesorios: ["cargador", "audifonos"]
        }
    ],
    envio: {
        tipo: "express",
        direccion: "Av. Central 123"
    }
};

console.log("Pedido: ", pedido);
