function saludarCliente(nombre: string): string {
    return `Hola ${nombre}, bienvenido a la tienda de celulares`;
}

console.log(saludarCliente('Francisco'));

const calcularPrecioConImpuesto = (precio: number, iva: number = 0.12): number => {
    return Number((precio * (1 + iva)).toFixed(2));
};
console.log(calcularPrecioConImpuesto(950, 0.12));

function anunciarCuotas(): void {
    console.log("Activando cuotas sin intereses");
    console.log("Recuerda agregar seguro de pantalla");
}
anunciarCuotas();

function calcularCuotaMensual(precio: number, meses: number): number {
    return Number((precio / meses).toFixed(2));
}

function totalAccesorios(...precios: number[]): number {
    return precios.reduce((acc, valor) => acc + valor, 0);
}

console.log(calcularCuotaMensual(1200, 12));
console.log(totalAccesorios(25, 30, 15));
