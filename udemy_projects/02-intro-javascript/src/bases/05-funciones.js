

const saludar = function (nombre) {
    return `Hola, ${nombre}`;
}

const saludar2 =  (nombre) => {
    return `Hola, ${nombre}`;
}

const saludar3 =  (nombre) => `Hola, ${nombre}`;

console.log(saludar);

const getUser = () => ({
    uid: 'ABC123',
    username: 'El_Papi1502'
});

const user = getUser();
console.log(user);

const getUsuarioActivo = (nombre) => ({
    uid: 'ABC123',
    username: nombre
});

const usuarioActivo = getUsuarioActivo('Joseph');
console.log(usuarioActivo);
