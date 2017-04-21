import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appCounterbtn]'
})
export class CounterbtnDirective {

  constructor() { }

  @HostListener('click', ['$event'])
  inc(evt: MouseEvent) {
    let btn = evt.target as HTMLButtonElement;
    let counter = +btn.innerHTML;
    counter++;
    btn.innerHTML = counter.toString();
  }


}
