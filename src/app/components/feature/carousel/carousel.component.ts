import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'mll-carousel',
  standalone: false,
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit, OnDestroy {
  images: string[] = [
    '../../../assets/site/images/oxfordpropsv1.jpg',
    '../../../assets/site/images/oxfordpropslobbyv1.jpg',
    '../../../assets/site/images/oxfordpropslobbyv2.jpg',
  ];
  intervalId: any;
  currentSlide = 0;
  autoTransitionTime = 4000;

  constructor() {}

  ngOnInit(): void {
    this.startSlideShow();
  }

  ngOnDestroy(): void {
    this.stopSlideShow();
  }

  previousSlide(): void {
    this.currentSlide = (this.currentSlide - 1) % this.images.length;
    this.resetSlideShow();
  }

  nextSlide(): void {
    this.currentSlide = (this.currentSlide + 1) % this.images.length;
    this.resetSlideShow();
  }

  startSlideShow(): void {
    this.intervalId = setInterval(() => this.nextSlide(), this.autoTransitionTime);
  }

  resetSlideShow(): void {
    this.stopSlideShow();
    this.startSlideShow();
  }

  stopSlideShow(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }
}
