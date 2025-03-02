import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class MonitoringService {
  private logs: { [key: string]: number } = {};

  wrapFunction(
    fn: (...args: any | any[]) => any,
    context: any,
    fnName: string
  ): any {
    return (...args: any) => {
      this.logFunctionCall(fnName, args);
      return fn.apply(context, args);
    };
  }

  wrapRequest<T>(
    fn: (...args: any[]) => Observable<T>,
    context: any,
    fnName: string
  ): (...args: any[]) => Observable<T> {
    return (...args: any[]): Observable<T> => {
      this.logFunctionCall(fnName, args);
      return fn.apply(context, args);
    };
  }

  private logFunctionCall(fnName: string, args: any[]): void {
    if (!this.logs[fnName]) this.logs[fnName] = 0;
    this.logs[fnName]++;
    console.log(`function ${fnName} called with arguments: `, args);
  }

  broadcast(): void {
    console.log('function call summary:');
    console.log(this.logs);
  }
}
