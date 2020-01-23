import {Component, Input, OnInit} from '@angular/core';
import {PokeApiService} from '../poke-api-service.service';
import {Pokemon} from '../pokemon';

@Component({
  selector: 'app-show-pokemons-component',
  templateUrl: './show-pokemons-component.component.html',
  styleUrls: ['./show-pokemons-component.component.css']
})
export class ShowPokemonsComponentComponent implements OnInit {

  @Input() childMessage: string;
  pokemonInfos = Pokemon;

  constructor(private pokeApiService: PokeApiService) {
  }

  ngOnInit() {
  }
  getInfosPokemon(pokemon: string) {
    console.log('le nom du pokemon : ', pokemon);
    this.pokeApiService.getPokemonById(pokemon).subscribe(result => {
      this.pokemonInfos = result; console.log('infos du pokemon : ', result);
    });
  }
}
