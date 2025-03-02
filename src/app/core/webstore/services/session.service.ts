import { Inject, Injectable } from '@angular/core';
import { WebStoreService } from './webstore.service';
import { PREFIX, WINDOW } from '../tokens';

@Injectable({
  providedIn: 'root',
})
export class SessionService extends WebStoreService {
  public constructor(
    @Inject(WINDOW) window: Window,
    @Inject(PREFIX) prefix: string,
  ) {
    super(window.sessionStorage);
  }
}
