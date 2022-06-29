import { ProductProtocol } from './interfaces/product-protocol';

export class Computer implements ProductProtocol {
  constructor(private name: string, private price: number) {}

  getPrice(): number {
    return this.price;
  }
  getName(): string {
    return this.name;
  }
}
