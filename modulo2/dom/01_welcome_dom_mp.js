console.log("Cabecera de la tienda:", document.head);
console.log("Secciones visibles:", document.body.children);
console.log("Titulo actual:", document.title || "sin titulo");

document.title = "Catalogo DOM - celulares";
console.log("Titulo actualizado:", document.title);
