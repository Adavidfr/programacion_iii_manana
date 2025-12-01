console.log("ARREGLOS DE MODELOS");
let  celulares = ["S24", "iPhone 16", "Pixel 9", "Edge 50"];
let listaVacia = new Array();
let listaVacia2 =[];
console.log("Modelos originales:", celulares);
console.log(listaVacia);
console.log(listaVacia2);
console.log("Acceso a elementos");
console.log(celulares[0]);
console.log(celulares[3]);

console.log("Modificar elementos");
celulares[0] = "S24 Ultra";
console.log(celulares);

console.log("Agregar elementos al final");
celulares.push("Xiaomi 14");
console.log(celulares);

console.log("Agregar elementos al inicio");
celulares.unshift("Galaxy A55");
console.log(celulares);

console.log("Eliminar el ultimo elemento");
celulares.pop();
console.log(celulares);
