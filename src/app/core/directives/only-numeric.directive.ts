import { Directive } from '@angular/core';

@Directive({
  selector: '[appOnlyNumeric]'
})
export class OnlyNumericDirective {

  constructor() { }

}
