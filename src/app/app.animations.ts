import { animation, style, group, query, trigger, animate, transition, animateChild, keyframes, stagger } from '@angular/animations';

export const fadeInOut = trigger('fadeInOut', [
  transition(':enter', [style({ opacity: 0 }), animate('300ms ease-out', style({ opacity: 1 }))]),
  transition(':leave', [animate('300ms ease-in', style({ opacity: 0 }))])
]);

/**
 * Author: Michael Lowenstein
 * Date: September 2024
 */

export const routerAnimations = trigger('routerAnimations', [
  transition('* <=> *', [
    query(':enter, :leave', style({ position: 'absolute', width: '100%' }), { optional: true }),
    group([
      query(':leave', [animate('300ms ease-in', style({ opacity: 0, transform: 'translateY(-10px)' }))], { optional: true }),
      query(':enter', [style({ opacity: 0, transform: 'translateY(10px)' }), animate('300ms ease-out', style({ opacity: 1 }))], { optional: true }),
    ]),
  ]),
]);

export const routeAnimations = trigger('routeAnimations', [
  transition('* => *', [
    group([
      query(':enter', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate('300ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ], { optional: true }),
      query(':leave', [
        style({ opacity: 1 }),
        animate('300ms ease-in', style({ opacity: 0 }))
      ], { optional: true })
    ])
  ])
]);

export const transitionAnimation = animation([
  style({
    height: '{{ height }}',
    opacity: '{{ opacity }}',
    backgroundColor: '{{ backgroundColor }}'
  }),
  animate('{{ time }}')
]);


// Routable animations
export const slideInAnimation =
  trigger('routeAnimations', [
    transition('* <=> *', [
      style({ position: 'relative' }),
      query(':enter, :leave', [
        style({
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%'
        })
      ], { optional: true }),
      query(':enter', [
        style({ left: '-100%' })
      ], { optional: true }),
      query(':leave', animateChild(), { optional: true }),
      group([
        query(':leave', [
          animate('300ms ease-out', style({ left: '100%' }))
        ], { optional: true }),
        query(':enter', [
          animate('300ms ease-out', style({ left: '0%' }))
        ], { optional: true }),
      ]),
    ]),
    transition('* <=> *', [
      style({ position: 'relative' }),
      query(':enter, :leave', [
        style({
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%'
        })
      ], { optional: true }),
      query(':enter', [
        style({ left: '-100%' })
      ], { optional: true }),
      query(':leave', animateChild(), { optional: true }),
      group([
        query(':leave', [
          animate('200ms ease-out', style({ left: '100%', opacity: 0 }))
        ], { optional: true }),
        query(':enter', [
          animate('300ms ease-out', style({ left: '0%' }))
        ], { optional: true }),
        query('@*', animateChild(), { optional: true })
      ]),
    ])
  ]);

/** inter-page navigation animations */
export const routerTransition = trigger('routerTransition', [
  transition('* => *', [
    query(':enter, :leave', style({ position: 'fixed', width: '100%' }), { optional: true }),
    group([
      query(':enter', [style({ opacity: 0 }), animate('0.5s', style({ opacity: 1 }))], { optional: true }),
      query(':leave', [animate('0.3s ease-in-out', style({ transform: 'scale3d(0, 0, 0)' }))], { optional: true }),
    ]),
  ]),
]);

/** intra-page navigation animations */
export const sectionTransition = trigger('sectionTransition', [
  transition('* => *', [
    query(':enter, :leave', style({ position: 'fixed', width: '100%' }), { optional: true }),
    group([
      query(':enter', [style({ opacity: 0 }), animate('0.5s', style({ opacity: 1 }))], { optional: true }),
      query(':leave', [animate('0.3s ease-in-out', style({ transform: 'scale3d(0, 0, 0)' }))], { optional: true }),
    ]),
  ]),
]);

/** dialog state transition animations */
export const dialogStateTransition = trigger('dialogStateTransition', [
  transition('* => *', [
    query(':enter, :leave', style({ position: 'fixed', width: '100%' }), { optional: true }),
    group([
      query(':enter', [style({ opacity: 0 }), animate('0.5s', style({ opacity: 1 }))], { optional: true }),
      query(':leave', [animate('0.3s ease-in-out', style({ transform: 'scale3d(0, 0, 0)' }))], { optional: true }),
    ]),
  ]),
]);

/** form-submission animations */
export const formSubmission = trigger('formSubmission', [
  transition('* => *', [
    query(':enter, :leave', style({ position: 'fixed', width: '100%' }), { optional: true }),
    group([
      query(':enter', [style({ opacity: 0 }), animate('0.5s', style({ opacity: 1 }))], { optional: true }),
      query(':leave', [animate('0.3s ease-in-out', style({ transform: 'scale3d(0, 0, 0)' }))], { optional: true }),
    ]),
  ]),
]);

/** notificatyion animations */
export const notificationEffect = trigger('showHide', [
  transition(':enter', [
    style({
      opacity: 0,
      transform: 'scaleX(0.98) scaleY(0)',
      position: 'relative',
    }),
    animate('150ms', style({
      opacity: 1,
      transform: 'scale(1)',
    }))
  ]),
  transition(':leave', [
    style({
      opacity: 1,
      transform: 'scale(1)',
    }),
    animate('250ms', style({
      opacity: 0,
      transform: 'scaleX(0.98) scaleY(0)',
    }))
  ]),
]);

export const queryEffect = trigger('query', [
  transition(':enter', [
    style({ height: 0 }),
    group([
      animate(500, style({ height: '*' })),
      query(':enter', [
        style({ opacity: 0, transform: 'scale(0)'}),
        animate(2000, style({ opacity: 1, transform: 'scale(1)' }))
      ]),
      query('.hero', [
        style({ transform: 'translateX(-100%)'}),
        animate('.7s 500ms ease-in', style({ transform: 'translateX(0)' }))
      ]),
    ]),
    query('@animateMe', animateChild()),
  ]),
  transition(':leave', [
    style({ height: '*' }),
    query('@animateMe', animateChild()),
    group([
      animate('500ms 500ms', style({ height: '0', padding: '0' })),
      query(':leave', [
        style({ opacity: 1, transform: 'scale(1)'}),
        animate('1s', style({ opacity: 0, transform: 'scale(0)' }))
      ]),
      query('.hero', [
        style({ transform: 'translateX(0)'}),
        animate('.7s ease-out', style({ transform: 'translateX(-100%)' }))
      ]),
    ]),
  ]),
]);

export const selfEffect = trigger('animateMe', [
  transition('* <=> *', animate('500ms cubic-bezier(.68,-0.73,.26,1.65)', keyframes([
    style({ backgroundColor: 'transparent', color: '*', offset: 0 }),
    style({ backgroundColor: 'blue', color: 'white', offset: 0.2 }),
    style({ backgroundColor: 'transparent', color: '*', offset: 1 })
  ])))
]);


export const routerSlideAnimation =
  trigger('routeAnimations', [
    transition('* => *', [
      query(':enter, :leave', [
        style({
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
        }),
      ], { optional: true }),

      group([
        query(':leave', [
          animate('300ms ease-out', style({
            transform: 'translateX({{ direction }})',
            opacity: 0,
          })),
        ], { optional: true }),

        query(':enter', [
          style({
            transform: 'translateX({{ directionInverse }})',
            opacity: 0,
          }),
          animate('300ms ease-out', style({
            transform: 'translateX(0)',
            opacity: 1,
          })),
        ], { optional: true }),
      ]),
    ], {
      params: { // Default parameters
        direction: '100%',
        directionInverse: '-100%',
      },
    }),
  ]);

export const staggeredFadeIn = trigger('staggeredFadeIn', [
  transition(':enter', [
    query('.animated-item', [
      style({ opacity: 0, transform: 'translateY(20px)' }),
      stagger(150, [
        animate('600ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ])
  ])
]);
