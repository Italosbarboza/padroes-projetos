import { IObserver } from '../interfaces/IObserver';

export class Observer implements IObserver {
  constructor(private observaverInstance: string) {}

  update(): void {
    console.log(this.observaverInstance);
  }
}
