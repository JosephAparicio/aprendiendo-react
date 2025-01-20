
const persona = {
    nombre: 'Tony',
    apellido: 'Stark',
    edad: 45,
    direccion: {
        ciudad: 'New York',
        zip: 2343423,
        lat: 14.1312321,
        lng: 34.254324
    }
};

const persona2 = {...persona};
persona2.nombre = 'Peter';

console.log(persona)
console.log(persona2)