const anioBisiesto = function (anio) {
    if (typeof anio !== 'number') {
        throw TypeError('El argumento debe ser un número.');
    }
    if (!Number.isInteger(anio)) {
        throw TypeError('El argumento debe ser un número entero.')
    }
    if (anio == 0) return false;
    if (anio % 4 != 0) return false;
    if (anio % 100 != 0) return true;
    if (anio % 400 != 0) return false;
    return true;
}

const calcular = document.getElementById('calcular');
const borrar = document.getElementById('borrar');

calcular.addEventListener('click', function () {
    let form = document.forms['myForm'];
    let anio = parseInt(form.anio.value);
    let bisiesto = anioBisiesto(anio);
    form.anio.placeholder = bisiesto ? `El año: ${anio}, es bisiesto` + (form.anio.value = ' ') :
        `El año: ${anio}, no es bisiesto` + (form.anio.value = ' ');
});

borrar.onclick = () => {
    let form = document.forms['myForm'];
    form.anio.placeholder = 'Digite el Año:';
}

