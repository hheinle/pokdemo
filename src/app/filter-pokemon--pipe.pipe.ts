import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterPokemonPipe'
})
export class FilterPokemonPipePipe implements PipeTransform {

  transform(pokemons: any[], searchedName?: string): any {
    console.log('searchedName : ', searchedName);
    console.log(pokemons);
    if (typeof pokemons !== 'undefined') {
      return pokemons.filter((e) => {
        return e.name.toLowerCase().indexOf(searchedName.toLowerCase()) !== -1;
      });
    } else {
      return [];
    }
  }

}
