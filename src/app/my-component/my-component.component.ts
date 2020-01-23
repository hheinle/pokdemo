import { Component, OnInit } from '@angular/core';
import {Pokemon} from '../pokemon';

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

  constructor() {
    this.Pikachu = new Pokemon('Pikachu');
    this.Evoli = new Pokemon('Evoli');
    this.Carapuce = new Pokemon('Carapuce');
    this.Mimantis = new Pokemon('Mimantis');
    this.Ponyta = new Pokemon('Ponyta');
    this.pokemons = [this.Pikachu, this.Evoli, this.Carapuce, this.Mimantis, this.Ponyta];
  }

  ngOnInit() {
  }

  go() {
    console.log('Id recherché : ',this.id);
    console.log('Pokemon choisi : ',this.pokemonChoice);
  }
}
