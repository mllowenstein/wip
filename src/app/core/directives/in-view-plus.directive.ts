import { isPlatformBrowser } from '@angular/common';
import { Directive, ElementRef, EventEmitter, Output, OnDestroy, AfterViewInit, PLATFORM_ID, Inject, OnInit } from '@angular/core';

@Directive({
  selector: '[mllInViewPlus]'
})

export class InViewAdvancedDirective implements OnInit, OnDestroy {
  @Output() inView = new EventEmitter<IntersectionObserverEntry>();
  @Output() fullyInView = new EventEmitter<boolean>();
  @Output() partiallyInView = new EventEmitter<boolean>();

  // Configurable options
  rootMargin: string = '0px';
  threshold: number | number[] = 0.1;

  private observer?: IntersectionObserver;

  constructor(
    private elementRef: ElementRef,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.createAdvancedObserver();
    }
  }

  ngOnDestroy(): void {
    this.destroyObserver();
  }

  private createAdvancedObserver(): void {
    if (!('IntersectionObserver' in window)) {
      // Fallback for older browsers
      this.partiallyInView.emit(true);
      this.fullyInView.emit(true);
      return;
    }

    const options: IntersectionObserverInit = {
      root: null,
      rootMargin: this.rootMargin,
      threshold: this.threshold
    };

    this.observer = new IntersectionObserver(
      (entries) => this.handleAdvancedIntersection(entries),
      options
    );

    if (this.elementRef.nativeElement) {
      this.observer.observe(this.elementRef.nativeElement);
    }
  }

  private handleAdvancedIntersection(entries: IntersectionObserverEntry[]): void {
    entries.forEach(entry => {
      // Emit the full entry for detailed control
      this.inView.emit(entry);

      // Emit simplified boolean states
      this.partiallyInView.emit(entry.isIntersecting);
      this.fullyInView.emit(entry.intersectionRatio >= 0.95);
    });
  }

  private destroyObserver(): void {
    if (this.observer) {
      this.observer.disconnect();
      this.observer = undefined;
    }
  }
}
