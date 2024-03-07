import { Component, OnInit } from '@angular/core';
import { NotificationsService } from '../services/notifications.service';
import { Observable } from 'rxjs';
import { first } from "rxjs/operators";

@Component({
  selector: 'app-notifications-manager',
  templateUrl: './notifications-manager.component.html',
  styleUrls: ['./notifications-manager.component.scss']
})
export class NotificationsManagerComponent implements OnInit {
  notificationsCount$: Observable<number>;
  constructor(private notificationsService: NotificationsService) { }

  ngOnInit(): void {
    this.notificationsCount$ = this.notificationsService.count$;
  }

  getCountValue(callBack) {
    this.notificationsCount$.pipe(
      first()
    ).subscribe(callBack)
  }

  addNotification() {
    this.getCountValue((count)=>{
      this.notificationsService.setCount(++count);
    })
    // this.notificationsCount++;
  }

  removeNotification() {
    this.getCountValue((count)=>{
      if (count == 0) {
        return;
      }
      this.notificationsService.setCount(--count);
    })
  }

  resetCount() {
    this.notificationsService.setCount(0);
  }

}
