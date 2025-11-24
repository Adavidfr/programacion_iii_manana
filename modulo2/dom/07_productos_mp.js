const productos = [
  {
    nombre: "Galaxy A55",
    descripcion: "128GB, camara 50MP",
    precio: 399,
    existencia: 18,
    ubicacion: "Vitrina A",
  },
  {
    nombre: "Galaxy S24",
    descripcion: "256GB, pantalla 120Hz",
    precio: 899,
    existencia: 9,
    ubicacion: "Vitrina B",
  },
  {
    nombre: "iPhone 16",
    descripcion: "128GB, chip A18",
    precio: 999,
    existencia: 7,
    ubicacion: "Vitrina C",
  },
  {
    nombre: "iPhone 16 Pro",
    descripcion: "256GB, titanio",
    precio: 1199,
    existencia: 5,
    ubicacion: "Vitrina D",
  },
  {
    nombre: "Pixel 9",
    descripcion: "128GB, IA integrada",
    precio: 799,
    existencia: 10,
    ubicacion: "Vitrina E",
  },
  {
    nombre: "Motorola Edge 50",
    descripcion: "256GB, carga rapida",
    precio: 699,
    existencia: 6,
    ubicacion: "Vitrina F",
  },
  {
    nombre: "Xiaomi 14",
    descripcion: "512GB, camara Leica",
    precio: 899,
    existencia: 8,
    ubicacion: "Vitrina G",
  },
  {
    nombre: "Honor Magic 6",
    descripcion: "256GB, 5G",
    precio: 759,
    existencia: 11,
    ubicacion: "Vitrina H",
  },
  {
    nombre: "Realme GT",
    descripcion: "256GB, 144Hz",
    precio: 629,
    existencia: 12,
    ubicacion: "Vitrina I",
  },
  {
    nombre: "Galaxy Z Flip",
    descripcion: "256GB, plegable",
    precio: 1099,
    existencia: 4,
    ubicacion: "Vitrina J",
  },
];

const tabla = document.getElementById("cuerpoTabla");
productos.forEach((p) => {
  const fila = document.createElement("tr");
  fila.innerHTML = `
    <td>${p.nombre}</td>
    <td>${p.descripcion}</td>
    <td>$${p.precio.toFixed(2)}</td>
    <td>${p.existencia}</td>
    <td>${p.ubicacion}</td>
  `;
  tabla.appendChild(fila);
});
