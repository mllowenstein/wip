import { Injectable, signal, WritableSignal, computed, Signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PowService {
  private nonce: WritableSignal<number> = signal(0);
  private hashResult: WritableSignal<string> = signal('');
  private status: WritableSignal<string> = signal('idle');
  private worker: Worker | null = null;
  private difficulty: number = 4;

  constructor() {
    if (typeof this.worker !== 'undefined') {
      this.worker = new Worker(new URL('./powe.worker', import.meta.url));
      this.worker.onmessage = (event) => {
        this.nonce.set(event.data.nonce);
        this.hashResult.set(event.data.hashResult);
        this.status.set('Valid PoW Found');
      };
    }
  }

  getNonce(): Signal<number> {
    return this.nonce;
  }

  getHash(): Signal<string> {
    return this.hashResult;
  }

  getStatus(): Signal<string> {
    return this.status;
  }

  startMining(): void {
    if (this.worker) {
      this.status.set('Mining...');
      this.worker.postMessage({ difficulty: this.difficulty });
    }
  }

  cancelMining(): void {
    this.status.set('Mining Canceled');
    this.worker?.terminate();
    this.worker = new Worker(new URL('./pow.worker', import.meta.url));
  }
}

