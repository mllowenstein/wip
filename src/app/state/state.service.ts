import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StateService<T> {

  private state$!: BehaviorSubject<T>;

  constructor(_initialState: T) {
    this.state$ = new BehaviorSubject(_initialState);
  }

  select<K>(selector: (state: T) => K): Observable<K> {
    return this.state$.pipe(map(selector));
  }

  update(newState: Partial<T>): void {
    this.state$.next({ ...this.state$.value, ...newState });
  }
}

