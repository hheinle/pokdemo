import { Component, OnInit } from '@angular/core';
import {Pokemon} from '../pokemon';

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css']
})
export class MyComponentComponent implements OnInit {

  id = '';
  private pokemons: any[];
  private Pikachu: Pokemon;
  private Smogogo: Pokemon;
  private Miaouss: Pokemon;
  private Bulbizar: Pokemon;

  constructor() {
    this.Pikachu = new Pokemon('Pikachu');
    this.Smogogo = new Pokemon('Smogogo');
    this.Miaouss = new Pokemon('Miaouss');
    this.Bulbizar = new Pokemon('Bulbizar');
  }


  ngOnInit() {
  }

}
