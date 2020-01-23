import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterPokemonPipe'
})
export class FilterPokemonPipePipe implements PipeTransform {

  transform(pokemons: any[], searchedName?: string): any {
    if (typeof pokemons !== 'undefined') {
      return pokemons.filter((e) => {
        // return e[property].toLowerCase().indexOf(searchString.toLowerCase()) !== -1;
        return searchedName ? pokemons.filter(pokemon => pokemon.name === searchedName) : pokemons;
      });
    } else {
      return [];
    }
  }

}
