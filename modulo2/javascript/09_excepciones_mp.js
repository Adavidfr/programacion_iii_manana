try{
    const precio = Number("abc");
    if (isNaN(precio)) {
        throw new Error("Precio invalido para el celular");
    }
    console.log(precio);
}catch(error){
    console.error("Mensaje de error: ", error.message);
}

try{
    console.log("Intentando leer ficha tecnica...");
    JSON.parse('{"modelo":"Galaxy"');
}catch(error){
    console.error("Mensaje de error: ", error.message);
} finally{
    console.log("Finalizado intento de lectura de ficha");
}
