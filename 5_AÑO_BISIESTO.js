const anioBisiesto = function (anio) {
    if (anio % 4 != 0) return false;
    if (anio % 100 != 0) return true;
    if (anio % 400 != 0) return false;
    return true;
}

const obtenerDato = function () {
    let form = document.forms['myForm'];
    let anio = form.anio.value;
    let bisiesto = anioBisiesto(anio);

    document.getElementById('respuesta').innerHTML = bisiesto ? `<h4>El año: ${anio}, es bisiesto</h4>` :
        `<h4>El año: ${anio}, no es bisiesto</h4>`;
    console.log(form);
}

const limpiar = () => document.getElementById('respuesta').innerHTML = ' ';