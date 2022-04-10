export default class Subject {
  constructor(private _name: string) {}

  get name(): string {
    return this._name;
  }
  set name(value) {
    if (value.length < 3) {
      throw new Error('Name must have at least 3 characters');
    }
    this._name = value;
  }
}

const matematica = new Subject('Matemática');
