import { trigger, transition, style, animate } from '@angular/animations';

export const slideInAnimation =
  trigger('routeAnimations', [
    transition('HomePage <=> AboutPage', [
      style({ position: 'relative' }),
      animate('0.5s ease-in-out', style({ opacity: 0, transform: 'translateX(100%)' }))
    ]),
    transition('* <=> FilterPage', [
      style({ position: 'relative' }),
      animate('0.5s ease-in-out', style({ opacity: 0, transform: 'translateY(-100%)' }))
    ])
  ]);