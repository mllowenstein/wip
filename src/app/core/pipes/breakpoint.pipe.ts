import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Pipe, PipeTransform } from '@angular/core';
import { map, Observable, of } from 'rxjs';

const BREAKPOINTS = {
  [Breakpoints.XSmall]: 'XSmall',
  [Breakpoints.Small]: 'Small',
  [Breakpoints.Medium]: 'Medium',
  [Breakpoints.Large]: 'Large',
  [Breakpoints.XLarge]: 'XLarge'
} as const;
const BREAKPOINTS_REV = Object.fromEntries(Object.entries(BREAKPOINTS).map(([key,val])=>[val,key]));
type ValueOf<T> = T[keyof T];
export type BreakpointsNames = ValueOf<typeof BREAKPOINTS>;

@Pipe({
  name: 'breakpointWatcher'
})
export class BreakpointPipe implements PipeTransform {

  constructor(private breakpointObserver: BreakpointObserver) {}

  transform<T>(value: T, ...args: [BreakpointsNames,T][]): Observable<T> {
    const cases = new Map(args);
    const breakpointToObserve = Array.from(cases.keys()).map(key=>BREAKPOINTS_REV[key]);
    return this.breakpointObserver.observe(breakpointToObserve).pipe(map((state)=>{
      if (!state.matches) {
        return value;
      }
      for (let b of breakpointToObserve) {
        if (state.breakpoints[b]) {
          const bpName = BREAKPOINTS[b];
          const caseVal = cases.get(bpName);
          if (caseVal) {
            return caseVal;
          }
        }
      }
      return value;
    }));
  }
}
