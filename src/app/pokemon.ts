export class Pokemon {
  private _name: string;
  private _stats: string;

  constructor(name: string, stats: string) {
    this._name = name;
    this._stats = stats;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get stats(): string {
    return this._stats;
  }

  set stats(value: string) {
    this._stats = value;
  }
}
