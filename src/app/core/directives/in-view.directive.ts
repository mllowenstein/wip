import { Directive, ElementRef, EventEmitter, Output, OnDestroy, AfterViewInit } from '@angular/core';

@Directive({
  selector: '[mllInView]'
})
export class InViewDirective implements AfterViewInit, OnDestroy {
  @Output() inView = new EventEmitter<boolean>();
  private observer?: IntersectionObserver;

  constructor(private elem: ElementRef) { }

  ngAfterViewInit(): void {
    this.observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        this.inView.emit(entry.isIntersecting);
      });
    }, {
      threshold: 0.25 // 25% visible = trigger
    });

    this.observer.observe(this.elem.nativeElement);
  }

  ngOnDestroy() {
    this.observer?.disconnect();
  }
}
