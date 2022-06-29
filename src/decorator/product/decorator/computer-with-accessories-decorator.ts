import { ProductDecorator } from './product-decorator';

export class ComputerWithAccessoriesDecorator extends ProductDecorator {
  getPrice(): number {
    return this.product.getPrice() + 30;
  }

  getName(): string {
    return this.product.getName() + ' ' + 'com acessórios';
  }
}
