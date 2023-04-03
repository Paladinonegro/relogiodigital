const horas= document.getElementById('horas');
const minutos= document.getElementById('minutos');
const segundos= document.getElementById('segundos');

const relogio = setInterval(function time() {
    let datetoday = new Date();
    let hr = datetoday.getHours();
    let min = datetoday.getMinutes();
    let seg = datetoday.getSeconds();

    horas.textContent = hr;
    minutos.textContent = min;
    segundos.textContent = seg;
})
