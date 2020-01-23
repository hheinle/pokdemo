import { Component, OnInit } from '@angular/core';
import {Pokemon} from '../pokemon';
import {PokeApiService} from '../poke-api-service.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css']
})
export class MyComponentComponent implements OnInit {
  title = 'pokdemo';
  id = '';
  private Pikachu: Pokemon;
  private Evoli: Pokemon;
  private Carapuce: Pokemon;
  private Mimantis: Pokemon;
  private Ponyta: Pokemon;
  private pokemons: any[];
  pokemonChoice = '';
  searchedString = '';

  constructor(private pokeApiService: PokeApiService) {
    this.pokeApiService.getListPokemons().subscribe((result: Observable<any>) => {console.log(result); });
    this.Pikachu = new Pokemon('Pikachu');
    this.Evoli = new Pokemon('Evoli');
    this.Carapuce = new Pokemon('Carapuce');
    this.Mimantis = new Pokemon('Mimantis');
    this.Ponyta = new Pokemon('Ponyta');
    this.pokemons = [this.Pikachu, this.Evoli, this.Carapuce, this.Mimantis, this.Ponyta];
  }

  ngOnInit() {
  }

}
