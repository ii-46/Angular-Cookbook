import { Directive, ElementRef, Input, OnInit, Output, EventEmitter } from '@angular/core';

export interface ReadTimeConfig {
  wordsPerMinute: number
}

@Directive({
  selector: '[appReadTime]'
})
export class ReadTimeDirective {
  @Input() configuration: ReadTimeConfig = {
    wordsPerMinute: 200
  }

  @Output() readTimeCalculated = new EventEmitter<string>()

  constructor(private el: ElementRef ) { }
  ngOnInit() {
    const text = this.el.nativeElement.textContent;
    const time = this.calculateReadTime(text);
    const timeStr = this.createTimeString(time);
    this.readTimeCalculated.emit(timeStr);
  }

  calculateReadTime(text: string) {
    const wordCount = text.split(/\s+/g).length;
    const minutes = wordCount / this.configuration.wordsPerMinute;
    return Math.ceil(minutes);
  }

  createTimeString(time: number) {
    if (time == 1) {
      return "1 minute";
    } else if (time < 1) {
      return "< 1 minute";
    } else {
      return `${time} minutes`;
    }
  }
}
