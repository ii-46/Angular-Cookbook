import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {
  private count = new BehaviorSubject<number>(10);
  count$ = this.count.asObservable();
  constructor() { }
  setCount(nextValue: number) {
    this.count.next(nextValue);
  }
}
