import { Injectable } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Injectable({
  providedIn: 'root',
})
export class AnimationService {

  fadeInOut = trigger('fadeInOut', [
    state('in', style({ opacity: 1 })),
    transition(':enter', [style({ opacity: 0 }), animate('500ms ease-in')]),
    transition(':leave', [animate('500ms ease-out', style({ opacity: 0 }))])
  ]);

  slideInLeft = trigger('slideInLeft', [
    state('in', style({ transform: 'translateX(0)' })),
    transition(':enter', [style({ transform: 'translateX(-100%)' }), animate('300ms ease-out')]),
    transition(':leave', [animate('300ms ease-in', style({ transform: 'translateX(-100%)' }))])
  ]);

  slideInRight = trigger('slideInRight', [
    state('in', style({ transform: 'translateX(0)' })),
    transition(':enter', [style({ transform: 'translateX(100%)' }), animate('300ms ease-out')]),
    transition(':leave', [animate('300ms ease-in', style({ transform: 'translateX(100%)' }))])
  ]);

  dialogZoomInOut = trigger('dialogZoomInOut', [
    state('in', style({ opacity: 1 })),
    transition(':enter', [
      style({ opacity: 0, transform: 'scale(0.5)' }),
      animate('300ms ease-out', style({ opacity: 1, transform: 'scale(1)' })),
    ]),
    transition(':leave', [
      style({ opacity: 1 }),
      animate('300ms ease-in', style({ opacity: 0, transform: 'scale(0.5)' })),
    ])
  ]);
}
