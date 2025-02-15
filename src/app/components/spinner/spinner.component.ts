import { Component, ViewEncapsulation } from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';
import { SpinnerService } from './spinner.service';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.css'],
  // encapsulation: ViewEncapsulation.ShadowDom,
})
export class SpinnerComponent {
  private loadingSubscription = new Subscription();
  public isLoading = false;

  constructor(private readonly loader: SpinnerService) {
    console.log("called");
    this.loadingSubscription = this.loader.isLoading$.subscribe(
      state => {
        console.log(state);
        this.isLoading = state;
      }
    );
  }

  ngOnDestroy() {
    this.loadingSubscription.unsubscribe();
  }
}

  // constructor(public loader: SpinnerService) {}
