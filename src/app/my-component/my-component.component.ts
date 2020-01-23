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
  test = '';
  private pokemons: Pokemon[] = [];
  pokemonChoice = '';
  searchedString = '';

  constructor(private pokeApiService: PokeApiService) {

  }

  ngOnInit() {
    this.pokeApiService.getListPokemons().subscribe(result => { this.pokemons = result.results; });
  }

  go() {
    console.log('Id recherché : ', this.test);
    console.log('Pokemon choisi : ', this.pokemonChoice);
  }


}
