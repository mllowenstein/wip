import { HammerGestureConfig, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';

export class CustomHammerConfig extends HammerGestureConfig {
  override = { swipe: { direction: 31 } }; // Enable all swipe directions
}
