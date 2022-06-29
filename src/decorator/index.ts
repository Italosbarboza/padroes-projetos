import { Computer } from './product/computer';
import { ComputerWithAccessoriesDecorator } from './product/decorator/computer-with-accessories-decorator';

const computer = new Computer('Dell', 50);
const computerWithAccessories = new ComputerWithAccessoriesDecorator(computer);

console.log(computerWithAccessories.getPrice());
console.log(computerWithAccessories.getName());
