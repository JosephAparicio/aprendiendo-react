import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp";
import heroes from "../../src/data/heroes";

describe('pruebas en 08-imp-exp', () => {
  test('getHeroeById debe retornar un heroe por ID', () => {
    const id = 1;
    const hero = getHeroeById(id);
    
    expect(hero).toEqual({id: 1, name: 'Batman', owner: 'DC'})
  })

  test('getHeroeById debe retornar undefined si no existe', () => {
    const id = 100;
    const hero = getHeroeById(id);
    
    expect(hero).toBeFalsy();
  })

  test('getHeroeByOwner debe de regresar heroes de DC', () => {
    const owner = 'DC';
    const heroes = getHeroesByOwner(owner);
    
    expect(heroes).toEqual(heroes.filter((heroe) => heroe.owner === owner));

  })

  test('getHeroeByOwner debe de regresar heroes de Marvel', () => {
    const owner = 'Marvel';
    const heroes = getHeroesByOwner(owner);
    
    expect(heroes).toEqual(heroes.filter((heroe) => heroe.owner === owner));

  })
  
})
