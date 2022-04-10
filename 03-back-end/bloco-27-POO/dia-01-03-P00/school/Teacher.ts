import Person from '../Person';
import Employee from '../interfaces/Employee.interface';
import Subject from './Subject';

export default class Teacher extends Person implements Employee {
  private _subject: Subject;
  private _registration: string = this.generateRegistration();
  private _salary: number = Number();
  private _admissionDate: Date;

  constructor(name: string, birthDate: Date, salary: number, subject: Subject) {
    super(name, birthDate);
    this._subject = subject;
    if (!this.isSalaryValid(salary)) {
      throw new Error('Salário inválido');
    }
    this._salary = salary;
    this._admissionDate = new Date();
  }

  get subject(): Subject {
    return this._subject;
  }

  set subject(value: Subject) {
    this._subject = value;
  }

  get registration(): string {
    return this._registration;
  }

  set registration(value) {
    this._registration = value;
  }

  get salary(): number {
    return this._salary;
  }

  set salary(value: number) {
    this._salary = value;
  }

  get admissionDate(): Date {
    return this._admissionDate;
  }

  set admissionDate(value) {
    if (new Date(value) > new Date(Date.now())) {
      throw new Error('Data de admissão inválida');
    }
    this._admissionDate = value;
  }

  generateRegistration(): string {
    const randomStr = String(Date.now() * (Math.random() + 1)).replace(
      /\W/g,
      ''
    );

    return `TEA${randomStr}`;
  }

  isSalaryValid(salary: number): boolean {
    return salary > 0;
  }
}

const backend = new Subject('Backend');
// const Espindola = new Teacher(backend, 'Espindola', new Date(), 1000);

// console.log(Espindola.generateRegistration());
// console.log(Espindola.subject);
// console.log(Espindola.admissionDate);
// console.log(Espindola.registration);
