import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class WebStoreService implements Storage {
  prefix!: string;

  constructor(
    protected readonly webstore: Storage,
  ) { }

  public get length(): number {
    return this.webstore.length;
  }

  private prefixKey(plainkey: string): string {
    if (this.prefix) return `[${this.prefix}]${plainkey}`;
    return plainkey;
  }

  public setItem(key: string, value: any): void {
    console.log(`saving ${key} into webstore...`);
    this.webstore.setItem(this.prefixKey(key), JSON.stringify(value));
  }

  public getItem(key: string): any | null;
  public getItem(key: string, fallback: any): any | null;
  public getItem(key: string, fallback?: any): any | null {
    console.log(`retrieving ${key} from webstore...`);
    const item: string | null = this.webstore.getItem(this.prefixKey(key));
    if (item !== null) return JSON.parse(item).value;
    if (fallback) return fallback;
    return null;
  }

  public removeItem(key: string): void {
    console.log(`removing ${key} from webstore...`);
    this.webstore.removeItem(this.prefixKey(key));
  }

  public clear(): void {
    console.warn('removing all items from webstore...');
    this.webstore.clear();
  }

  public key(index: number): string | null {
    return this.webstore.key(index);
  }
}
