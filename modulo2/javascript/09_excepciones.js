try{
    console.log(variableNoDeclarada);
}catch(error){
    console.error("mensaje de error: ", error.message);
}

try{
    console.log(" Intentando abrir archivo. . . ");
    throw new Error("Archivo no encontrado");
}catch(error){
    console.error("mensaje de error: ", error.message);
} finally{
    console.log("Finalizado intento de abrir archivo");
}