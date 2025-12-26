const titulo = document.getElementById('titulo');
console.log("Titulo:", titulo.textContent);

const notas = document.getElementsByClassName('nota');
Array.from(notas).forEach(nota => console.log("Nota:", nota.textContent));

const items = document.getElementsByClassName('item');
Array.from(items).forEach(item => console.log("Modelo:", item.textContent));

const asesores = document.getElementsByName('asesor');
Array.from(asesores).forEach(asesor => console.log("Asesor:", asesor.textContent));
