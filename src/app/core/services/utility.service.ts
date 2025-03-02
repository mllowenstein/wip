import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {
  cloneDeep(value: any): any {
    return JSON.parse(JSON.stringify(value));
  }

  isEqual(value: any, other: any): boolean {
    return JSON.stringify(value) === JSON.stringify(other);
  }

  debounce(func: (...args: any[]) => any, wait: number) {
    let timeout: any;
    return (...args: any[]) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => func(...args), wait);
    };
  }

  throttle(func: (...args: any[]) => any, limit: number) {
    let lastFunc: any;
    let lastRan: number;
    return (...args: any[]) => {
      const context = this;
      if (!lastRan) {
        func.apply(context, args);
        lastRan = Date.now();
      } else {
        clearTimeout(lastFunc);
        lastFunc = setTimeout(() => {
          if (Date.now() - lastRan >= limit) {
            func.apply(context, args);
            lastRan = Date.now();
          }
        }, limit - (Date.now() - lastRan));
      }
    };
  }

  merge(target: any, ...sources: any[]): any {
    if (!sources.length) return target;
    const source = sources.shift();

    if (typeof target === 'object' && typeof source === 'object') {
      for (const key in source) {
        if (source[key] && typeof source[key] === 'object') {
          if (!target[key]) Object.assign(target, { [key]: {} });
          this.merge(target[key], source[key]);
        } else {
          Object.assign(target, { [key]: source[key] });
        }
      }
    }

    return this.merge(target, ...sources);
  }

  uniq(array: any[]): any[] {
    return [...new Set(array)];
  }

  get(obj: any, path: string, defaultValue?: any): any {
    return (
      path.split('.').reduce((acc, part) => acc && acc[part], obj) ??
      defaultValue
    );
  }

  set(obj: any, path: string, value: any): any {
    const keys = path.split('.');
    let current = obj;
    keys.slice(0, -1).forEach(key => {
      if (!current[key]) current[key] = {};
      current = current[key];
    });
    current[keys[keys.length - 1]] = value;
    return obj;
  }

  flatten(array: any[]): any[] {
    return array.reduce(
      (acc, val) =>
        Array.isArray(val) ? acc.concat(this.flatten(val)) : acc.concat(val),
      []
    );
  }

  chunk(array: any[], size: number): any[][] {
    const result = [];
    for (let i = 0; i < array.length; i += size) {
      result.push(array.slice(i, i + size));
    }
    return result;
  }

  groupBy(array: any[], key: string): { [key: string]: any[] } {
    return array.reduce((acc, obj) => {
      const property = obj[key];
      if (!acc[property]) {
        acc[property] = [];
      }
      acc[property].push(obj);
      return acc;
    }, {});
  }

  find(array: any[], predicate: (value: any) => boolean): any {
    return array.find(predicate); // Using Array.prototype.find
  }

  shuffle(array: any[]): any[] {
    return array
      .map(value => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value);
  }

  capitalCase(value: string): string {
    return value.charAt(0).toUpperCase() + value.substring(1);
  }
}
