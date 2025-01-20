import { heroes } from '../data/heroes.js';

export const getHeroeById = (id) => heroes.find((heroes) => heroes.id === id)

//console.log(getHeroeById(2));

export const getHeroesByOwner = (owner) => heroes.filter((heroes) => heroes.owner ===owner);

//console.log(getHeroesByOwner('DC'));