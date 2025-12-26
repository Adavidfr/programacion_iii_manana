const formulario = document.getElementById("formulario");
const contenedor = document.getElementById("contenedorPedidos");
let pedidos = [];

formulario.addEventListener("submit", (e) => {
  e.preventDefault();

  const modelo = document.getElementById("modelo").value.trim();
  const color = document.getElementById("color").value.trim();
  const precio = parseFloat(document.getElementById("precio").value.trim());

  if (modelo && color && !isNaN(precio)) {
    const pedido = { id: Date.now(), modelo, color, precio };
    pedidos.push(pedido);
    renderizarPedido(pedido);
    formulario.reset();
  }
});

function renderizarPedido({ id, modelo, color, precio }) {
  const div = document.createElement("div");
  div.className = "pedido";
  div.setAttribute("data-id", id);

  div.innerHTML = `
    <h3>${modelo}</h3>
    <p>Color: ${color}</p>
    <p><strong>Precio: $${precio.toFixed(2)}</strong></p>
    <div class="acciones">
      <button class="eliminar">Eliminar</button>
    </div>
  `;

  contenedor.appendChild(div);
}

contenedor.addEventListener("click", (e) => {
  if (e.target.classList.contains("eliminar")) {
    const tarjeta = e.target.closest(".pedido");
    const id = parseInt(tarjeta.getAttribute("data-id"));
    pedidos = pedidos.filter((p) => p.id !== id);
    tarjeta.remove();
  }
});
