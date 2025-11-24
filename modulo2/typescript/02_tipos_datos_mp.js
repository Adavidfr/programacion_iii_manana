var stock = 25;
var modelo = 'Galaxy S24';
var enOferta = true;
var comentario = 'Revisar precios 5G';
if (stock > 0 && enOferta) {
    console.log('Modelo disponible en oferta');
}
else {
    console.log('Sin unidades para promocion');
}
var accesorios = ['cargador', 'funda', 'audifonos'];
for (var i = 0; i < accesorios.length; i++) {
    console.log(accesorios[i]);
}
var EstadoPedido;
(function (EstadoPedido) {
    EstadoPedido[EstadoPedido["Pendiente"] = 0] = "Pendiente";
    EstadoPedido[EstadoPedido["Empacado"] = 1] = "Empacado";
    EstadoPedido[EstadoPedido["Enviado"] = 2] = "Enviado";
    EstadoPedido[EstadoPedido["Entregado"] = 3] = "Entregado";
})(EstadoPedido || (EstadoPedido = {}));
console.log(EstadoPedido);
console.log(EstadoPedido.Enviado);
