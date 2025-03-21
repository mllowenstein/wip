import { Directive, ElementRef } from "@angular/core";

@Directive({
  selector: '[mllLazyLoad]',
  standalone: true
})
export class LazyLoadDirective {
  constructor(private el: ElementRef) {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        this.el.nativeElement.classList.add('visible');
      }
    }, { threshold: 0.2 });

    observer.observe(this.el.nativeElement);
  }
}
