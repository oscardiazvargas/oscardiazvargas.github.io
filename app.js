const anioBisiesto = function (anio) {
    if (anio % 4 != 0) return false;
    if (anio % 100 != 0) return true;
    if (anio % 400 != 0) return false;
    return true;
}

const calcular = document.getElementById('calcular');

calcular.addEventListener('click', function () {
    let form = document.forms['myForm'];
    let anio = form.anio.value;
    let bisiesto = anioBisiesto(anio);
    form.anio.placeholder = bisiesto ? `El año: ${anio}, es bisiesto` + (form.anio.value = ' ') :
        `El año: ${anio}, no es bisiesto` + (form.anio.value = ' ');
});