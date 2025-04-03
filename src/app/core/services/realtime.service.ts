import { Injectable, Signal, signal } from '@angular/core';
import { interval, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RealtimeService {
  private dataset$ = signal(this.generateData());

  constructor() {
    interval(3000).pipe(
      map(() => this.generateData())
    ).subscribe((data: any) => this.dataset$!.set(data));
  }
  getData(): Signal<any[]> {
    return this.dataset$.asReadonly();
  }

  private generateData(): any[] {
    return Array.from({ length: 10 }, (_, i) => ({
      id: i + 1,
      value: Math.floor(Math.random() * 100),
      timestamp: new Date().toISOString(),
      label: `Item ${i + 1}`
    }));
  }
}
