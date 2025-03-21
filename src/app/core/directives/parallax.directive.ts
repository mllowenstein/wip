import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[mllParallax]',
  standalone: true
})
export class ParallaxDirective {
  constructor(private elem: ElementRef) { }

  @HostListener('window:scroll', ['$event'])
  onScroll(): void {
    const scrollPosition = window.scrollY;
    this.elem.nativeElement.style.transform = `translateY(${scrollPosition * 0.5}px)`;
  }
}
