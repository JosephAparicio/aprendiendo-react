export function getSaludo(nombre) {
    return 'Hola ' + nombre;
}

const nombre = 'Joseph'

console.log( `Este es un texto: ${ getSaludo( nombre ) }  ` );