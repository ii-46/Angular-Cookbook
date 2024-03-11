import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-vc-logs',
  templateUrl: './vc-logs.component.html',
  styleUrls: ['./vc-logs.component.scss']
})
export class VcLogsComponent implements OnInit, OnChanges {
  logs: string[] = [];
  @Input() vName;
  constructor() { }

  ngOnInit(): void {
  }
  ngOnChanges(changes: SimpleChanges): void {
    const currValue = changes.vName.currentValue;
    if (changes.vName.firstChange) {
      this.logs.push(`initial version is ${currValue.trim()}`)
    } else {
      this.logs.push(`version changed to ${currValue.trim()}`)
      }
  }

}
