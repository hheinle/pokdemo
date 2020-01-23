import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Pokemon} from './pokemon';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class PokeApiService {

  private pokemonsListUrl = 'https://pokeapi.co/api/v2/pokemon?limit=964';
  private pokemonByIdUrl = 'https://pokeapi.co/api/v2/pokemon/';

  constructor(private http: HttpClient) { }

  getListPokemons(): Observable<any> {
    return this.http.get(this.pokemonsListUrl);
  }

  getPokemonById(pokeName: string): Observable<any> {
    return this.http.get(this.pokemonByIdUrl + pokeName);
  }
}
