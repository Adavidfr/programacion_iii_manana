const caja = document.getElementById('caja');
caja.addEventListener('mouseover',()=>{
    caja.style.background = '#ffda47';
    caja.textContent = 'Oferta 10% off';
});

caja.addEventListener('mouseout', ()=>{
    caja.style.background = '#0a7cff';
    caja.textContent = 'Resalta la oferta';
})

caja.addEventListener('click', ()=>{
    alert('Agregado al comparador de celulares');
})

const areaTouch = document.getElementById('areaTouch');
areaTouch.addEventListener('touchstart', ()=>{
    areaTouch.style.background = '#ff7043';
})
areaTouch.addEventListener('touchend', ()=>{
    areaTouch.style.background = '#0a7cff';
})
areaTouch.addEventListener('click', ()=>{
    areaTouch.style.background = '#ffd166';
    alert('Vista rapida del modelo');
})
