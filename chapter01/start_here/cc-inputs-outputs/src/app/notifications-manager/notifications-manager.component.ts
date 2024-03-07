import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-notifications-manager',
  templateUrl: './notifications-manager.component.html',
  styleUrls: ['./notifications-manager.component.scss']
})
export class NotificationsManagerComponent implements OnInit {
  @Input() count = 0
  @Output() countChange = new EventEmitter<number>()
  constructor() { }

  ngOnInit(): void {
  }

  addNotification() {
    this.count++;
    this.countChange.emit(this.count);
  }

  removeNotification() {
    if (this.count == 0) {
      return;
    }
    this.count--;
    this.countChange.emit(this.count);
  }

  resetCount() {
    this.count = 0;
    this.countChange.emit(this.count);
  }

}
