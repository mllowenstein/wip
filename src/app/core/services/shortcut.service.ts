import { Injectable } from '@angular/core';
import { fromEvent, Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ShortcutService {
  keyevents$: Observable<string>;

  constructor() {
    this.keyevents$ = fromEvent<KeyboardEvent>(window, 'keydown').pipe(
      filter((event) => !(event.target instanceof HTMLInputElement)),
      map((event => event.key)),
    );
  }
}
