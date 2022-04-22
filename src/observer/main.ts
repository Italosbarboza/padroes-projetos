import { IObserver } from './interfaces/IObserver';
import { IObservable } from './interfaces/IObservable';
import { Observable } from './services/observable.service';
import { Observer } from './services/observer.service';

const observer1: IObserver = new Observer('Observer1');
const observer2: IObserver = new Observer('Observer2');
const observer3: IObserver = new Observer('Observer3');
const observer4: IObserver = new Observer('Observer4');

const observable: IObservable = new Observable();

observable.subscribe(observer1, observer2, observer3, observer4);

observable.notify();

console.log('Agora removendo a inscrição do observer 2');

observable.unsubscribe(observer2);

observable.notify();
