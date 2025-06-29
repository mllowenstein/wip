import { isPlatformBrowser } from '@angular/common';
import { Directive, ElementRef, EventEmitter, Output, OnDestroy, AfterViewInit, PLATFORM_ID, Inject, OnInit } from '@angular/core';

@Directive({
  selector: '[mllInView]'
})
export class InViewDirective implements OnInit, AfterViewInit, OnDestroy {
  @Output() inView = new EventEmitter<boolean>();
  private observer?: IntersectionObserver;
  private readonly options: IntersectionObserverInit = {
    root: null,
    rootMargin: '-20px -0px -20px 0px',
    threshold: [0, 0.1, 0.5, 1],
  };

  constructor(
    private elem: ElementRef,
    @Inject(PLATFORM_ID) private platformId: Object,
  ) { }

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.createObserver();
    }
  }


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

  private createObserver(): void {
    if (!('IntersectionObserver' in window)) {
      this.inView.emit(true);
      return;
    }

    this.observer = new IntersectionObserver(
      (entries) => this.handleIntersection(entries),
      this.options,
    );

    if (this.elem.nativeElement) {
      this.observer.observe(this.elem.nativeElement);
    }
  }

  private handleIntersection(entries: IntersectionObserverEntry[]): void {
    entries.forEach(entry => {
      // Element is considered "in view" when intersecting with decent ratio
      const isInView = entry.isIntersecting && entry.intersectionRatio > 0.1;
      this.inView.emit(isInView);
    });
  }

  private destroyObserver(): void {
    if (this.observer) {
      this.observer.disconnect();
      this.observer = undefined;
    }
  }

  ngOnDestroy(): void {
    this.destroyObserver();
  }
}
