import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {
  private loading = new BehaviorSubject<boolean>(false);
  isLoading$ = this.loading.asObservable();

  show(): void {
    this.loading.next(true);
  }

  hide(): void {
    this.loading.next(false);
  }
}

/**
 *
 * import { LoaderService } from '../core/ui/services/loader.service';

@Component({
  selector: 'app-loading-indicator',
  standalone: true,
  template: `<div *ngIf="loading$ | async" class="loading-spinner"></div>`
})
export class LoadingIndicatorComponent {
  loading$ = this.loaderService.isLoading$;

  constructor(private loaderService: LoaderService) {}
}
 */

/**
 * this.loaderService.show();
this.http.get('api/data').subscribe(() => this.loaderService.hide());
 */
