
//desestructuracion
const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'Ironamn',
};

const {nombre, edad, clave} = persona;

console.log(nombre);
console.log(edad);
console.log(clave);

const retornaPersona = ({clave, nombre, edad, rango = 'Capitan'}) => {
    return {
        nombreClave: clave,
        anios: edad,
        latlng: {
            lat: 14.13121,
            lng: -12.1313
        }
    }
}

const {nombreClave, anios, latlng: {lat, lng}} = retornaPersona(persona);
console.log(nombreClave, anios);
console.log(lat, lng);