import { Component } from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';
import { SpinnerService } from './spinner.service';

@Component({
  selector: 'mll-spinner',
  standalone: false,
  templateUrl: './spinner.component.html',
  styleUrl: './spinner.component.css',
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
