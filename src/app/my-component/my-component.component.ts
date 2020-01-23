import { Component, OnInit } from '@angular/core';
import {Pokemon} from '../pokemon';
import {PokeApiService} from '../poke-api-service.service';
import {ShareService} from '../share.service';

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css']
})
export class MyComponentComponent implements OnInit {
  title = 'Angular ! Développez les tous !';
  test = '';
  private pokemons: Pokemon[] = [];
  pokemonChoice = '';
  searchedString = '';

  constructor(private pokeApiService: PokeApiService, private data: ShareService) {}

  ngOnInit() {
    this.pokeApiService.getListPokemons().subscribe(result => { this.pokemons = result.results; });
    this.data.currentMessage.subscribe(message => this.pokemonChoice = message);
  }

  go() {
    console.log('Id recherché : ', this.test);
    console.log('Pokemon choisi : ', this.pokemonChoice);
  }

  sendChoiceToComponent2() {
    console.log('choice : ', this.pokemonChoice);
    this.data.changeMessage(this.pokemonChoice);
  }

}
