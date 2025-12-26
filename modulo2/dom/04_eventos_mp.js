let tarjeta = null;
document.getElementById("crear").addEventListener("click", () => {
    tarjeta = document.createElement("article");
    tarjeta.innerHTML = "<h3>Galaxy S24+ 256GB</h3><p>Pantalla 120Hz y camara triple. Precio: .</p>";
    document.getElementById("contenedor").appendChild(tarjeta);
});
document.getElementById("eliminar").addEventListener("click", () =>{
    if (tarjeta) {
        tarjeta.remove();
        tarjeta = null;
    }
});
