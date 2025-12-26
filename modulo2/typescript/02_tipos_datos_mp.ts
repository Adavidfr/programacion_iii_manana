let stock: number = 25;
let modelo: string = 'Galaxy S24';
let enOferta: boolean = true;
let comentario: any = 'Revisar precios 5G';

if (stock>0 && enOferta){
    console.log('Modelo disponible en oferta');
} else {
    console.log('Sin unidades para promocion');
}

let accesorios: string[] =['cargador', 'funda', 'audifonos'];
for (let i=0;i<accesorios.length;i++){
    console.log(accesorios[i]);
}

enum EstadoPedido {
    Pendiente,
    Empacado,
    Enviado,
    Entregado
}

console.log(EstadoPedido);
console.log(EstadoPedido.Enviado);
