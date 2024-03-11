import { Directive, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appScrollTo]'
})
export class ScollToDirective {
  @Input() target = '';
  constructor() { }
  @HostListener("click")
  onClick() {
    const targetElement = document.querySelector(this.target);
    targetElement.scrollIntoView({
      behavior: "smooth"
    });
  }
}
