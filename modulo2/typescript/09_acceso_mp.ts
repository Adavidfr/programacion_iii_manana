try {
    console.log(modeloNoDeclarado);
} catch (error: any) {
    console.log("Error:", error.message);
}

try {
    console.log("Procesando orden de compra...");
    throw new Error("Inventario temporalmente no disponible");
} catch (error: any) {
    console.log("Error:", error.message);
} finally {
    console.log("Proceso finalizado");
}
