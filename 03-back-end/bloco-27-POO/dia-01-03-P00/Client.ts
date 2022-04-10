type Option = { food: string; price: number };
type Order = {
  client: string;
  consumed: Option[];
  payMethod: string;
  discount: number;
};

enum PayMethod {
  cash = 'cash',
  creditCard = 'creditCard',
  debitCard = 'debitCard',
}

class Client {
  private _options: Option[] = [
    { food: 'Batatinha', price: 6.9 },
    { food: 'Pizza', price: 10 },
    { food: 'Pão', price: 2 },
    { food: 'Café', price: 3 },
  ];
  private _requests: Option[] = [];
  private _orders: Order[] = [];
  constructor(private _name: string) {}

  // addOption(order: Option): void {
  //   this._options.push(order);
  // }

  get requests(): Option[] {
    return this._requests;
  }

  addRequest(food: string): void {
    const option = this._options.find((option) => option.food === food);
    if (option) {
      this._requests.push(option);
    }
  }

  getOptions(): Option[] {
    return this._options;
  }

  addOrder(payMethod: PayMethod, discount: number = 0): void {
    this._orders.push({
      client: this._name,
      consumed: this._requests,
      payMethod,
      discount,
    });
  }

  getTotalPrice(): number {
    const discout = this._orders[this._orders.length - 1].discount;
    return this._requests.reduce((acc, curr) => acc + curr.price * discout, 0);
  }

  getTotalDiscountedPrice(i: number): number {
    return this._orders[i].consumed.reduce((acc, curr) => acc + curr.price, 0);
  }

  getOrders(i: number): Order {
    return this._orders[i];
  }

  get name(): string {
    return this._name;
  }

}

const newClient = new Client('John');
