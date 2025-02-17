import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/internal/Subject';

@Injectable({
  providedIn: 'root'
})
export class SpinnerService {
  private ready$ = new Subject<boolean>();
  private loadingEvent$ = new Subject<boolean>();
  public doneLoading$ = this.ready$.asObservable();
  public isLoading$ = this.loadingEvent$.asObservable();

  constructor() {}

  public startLoading() {
    this.ready$.next(false);
    this.loadingEvent$.next(true);
  }

  public finishLoading() {
    this.ready$.next(true);
    this.loadingEvent$.next(false);
  }
}
