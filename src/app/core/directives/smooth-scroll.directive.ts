import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[mllsmoothscroll]',
  standalone: true,
})
export class SmoothScrollDirective {

  constructor(private elem: ElementRef) { }

  @HostListener('click')
  scrollToSection() {
    this.elem.nativeElement.scrollIntoView({ behavior: 'smooth' });
  }
}
