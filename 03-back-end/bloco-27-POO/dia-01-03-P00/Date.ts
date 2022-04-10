enum Months {
  jan = 'January',
  feb = 'February',
  mar = 'March',
  apr = 'April',
  may = 'May',
  jun = 'June',
  jul = 'July',
  aug = 'August',
  sep = 'September',
  Oct = 'October',
  Nov = 'November',
  Dec = 'December',
}
class DateTime {
  private _day: number = 0;
  private _month: number = 0;
  private _year: number = 0;
  private _months: string[] = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  constructor(day: number, month: number, year: number) {
    if (!this.dateIsValid()) {
      this._day = 1;
      this._month = 1;
      this._year = 1900;
      return;
    }

    this._day = day;
    this._month = month;
    this._year = year;
  }

  dateIsValid() {
    return (
      this._day > 0 &&
      this._day < 32 &&
      this._month > 0 &&
      this._month < 13 &&
      this._year > 0
    );
  }

  getMonthName(): string {
    return this._months[this._month];
  }

  isLeapYear(): boolean {
    return (
      this._year % 4 === 0 && (this._year % 100 !== 0 || this._year % 400 === 0)
    );
  }

  compare(date: DateTime): number {
    if (this._year > date._year) {
      return 1;
    } else if (this._year < date._year) {
      return -1;
    } else if (this._month > date._month) {
      return 1;
    } else if (this._month < date._month) {
      return -1;
    } else if (this._day > date._day) {
      return 1;
    } else if (this._day < date._day) {
      return -1;
    } else {
      return 0;
    }
  }

  format(): string {
    return `${this._day}/${this._month}/${this._year}`;
  }
}
