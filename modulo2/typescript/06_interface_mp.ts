import { Telefono } from "./05_interface_mp";

const telefono1: Telefono = {
    id: 100,
    modelo: 'Galaxy S24',
    marca: 'Samsung',
    precio: 950
}
const telefono2: Telefono = {
    id: 101,
    modelo: 'Pixel 9',
    marca: 'Google',
    precio: 799,
    promocion: 'Incluye cargador rapido'
}
console.log(telefono1);
console.log(telefono1.id);
console.log(telefono1.modelo);
console.log(telefono1.precio);
console.log(telefono2);
console.log(telefono2.id);
console.log(telefono2.modelo);
console.log(telefono2.precio);
console.log(telefono2.promocion);
