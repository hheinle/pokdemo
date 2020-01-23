export class Pokemon {
  private _namePokemon: string;
  private _statsPokemon: string;

  constructor(name: string, stats: string) {
    this._namePokemon = name;
    this._statsPokemon = stats;
  }

  get namePokemon(): string {
    return this._namePokemon;
  }

  set namePokemon(value: string) {
    this._namePokemon = value;
  }

  get statsPokemon(): string {
    return this._statsPokemon;
  }

  set statsPokemon(value: string) {
    this._statsPokemon = value;
  }
}
