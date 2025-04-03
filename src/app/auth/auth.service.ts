import { Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { env } from '../../env/env';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private authUrl: string = env.api.base;
  private authenticated = signal<boolean>(false);
  private otpSubject = new BehaviorSubject<boolean>(false);
  loggedIn$ = this.otpSubject.asObservable();

  constructor(private http: HttpClient) { }

  requestOTP(username: string): Observable<any> {
    return this.http.post(`${this.authUrl}/request-otp`, { username });
  }

  verifyOTP(username: string, otp: string): Observable<any> {
    return this.http.post(`${this.authUrl}/verify-otp`, { username, otp });
  }

  // submitOtp(username: string, otp: string): Observable<boolean> {
  //   return this.http.post(`${this.authUrl}/verify-otp`, { username, otp }).pipe(
  //     tap((isValid: boolean) => this.otpSubject.next(isValid))
  //   );
  // }

  storeToken(token: string): void {
    localStorage.setItem('authtoken', token);
  }

  getToken(): string | null {
    return localStorage.getItem('authtoken');
  }

  isAuthenticated(): boolean {
    const hastoken = !!this.getToken();
    return hastoken && this.authenticated();
  }

  logout(): void {
    localStorage.removeItem('authtoken');
    this.authenticated.set(false);
  }
}
