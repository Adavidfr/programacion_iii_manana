const mensaje = document.getElementById("mensaje");
mensaje.textContent = "Oferta flash: 12 meses sin intereses en celulares";
mensaje.style.color = "#0a7cff";

const link = document.getElementById('link');
link.setAttribute('href', 'https://ejemplo.tienda/celulares-5g');
link.textContent = "Ver celulares 5G";
link.classList.add('boton');
