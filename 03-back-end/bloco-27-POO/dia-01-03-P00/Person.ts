export default class Person {
  private _name: string;
  private _birthDate: Date;
  constructor(name: string, birthDate: Date) {
    this.validateName(name);
    this.validateBirthDate(birthDate);
    this._name = name;
    this._birthDate = birthDate;
  }
  get name(): string {
    return this._name;
  }
  set name(value: string) {
    this.validateName(value);
    this._name = value;
  }

  get birthDate(): Date {
    return this._birthDate;
  }

  set birthDate(value: Date) {
    this.validateBirthDate(value);
    this._birthDate = value;
  }

  validateName(value: string): void {
    if (value.length < 3) {
      throw new Error('Name must have at least 3 characters');
    }
  }

  validateBirthDate(value: Date): void {
    if (new Date(value) > new Date(Date.now())) {
      throw new Error('Birth date must be in the past');
    }
    if (new Date(value) < new Date(Date.now() - 3.79 * Math.pow(10, 12))) {
      throw new Error('Birth date must be less than 120 years in the past');
    }
  }
}
