import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { catchError, finalize, map, tap } from 'rxjs/operators';
import { FormGroup } from '@angular/forms';
import { ContactSubmission } from '../data/schema';
import { env } from '../../../env/env';

const SUBMIT_URL: string = 'https://localhost:5555/api/contact-me'; // env.email_api_url;

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private loadingSubject = new BehaviorSubject<boolean>(false);
  public isLoading$ = this.loadingSubject.asObservable()

  constructor(private http: HttpClient) { }

  get<T>(url: string, params?: HttpParams): Observable<T> {
    this.setLoading(true);
    return this.http.get<T>(url, { params }).pipe(
      tap(() => this.log('GET request successful', url)),
      catchError((err) => this.handleError(err, 'GET')),
      finalize(() => this.setLoading(false))
    );
  }

  submit(form: FormGroup): void {
    this.setLoading(true);
    const submission: ContactSubmission = {
      idkey: this.generateIdempotencyKey(),
      firstName: form.value.firstName!,
      lastName: form.value.lastName!,
      email: form.value.email ?? 'N/A',
      message: form.value.message
    };
    this.log(`Sending Email from ${submission.firstName} ${submission.lastName} to Michael Lowenstein...`, SUBMIT_URL);

    this.http.post(SUBMIT_URL, { submission }).pipe(
      tap(() => this.log('SUBMIT request successful', SUBMIT_URL)),
      catchError((err) => this.handleError(err, 'SUBMIT')),
      finalize(() => this.setLoading(false))
    );
  }

  post<T>(url: string, body: any, headers?: HttpHeaders): Observable<T> {
    this.setLoading(true);
    const defaultHeaders = headers || new HttpHeaders().set(
      'X-Idempotency-Key',
      this.generateIdempotencyKey()
    );
    return this.http.post<T>(url, body, { headers: defaultHeaders }).pipe(
      tap(() => this.log('POST request successful', url)),
      catchError((err) => this.handleError(err, 'POST')),
      finalize(() => this.setLoading(false))
    );
  }

  put<T>(url: string, body: any): Observable<T> {
    this.setLoading(true);

    return this.http.put<T>(url, body).pipe(
      tap(() => this.log('PUT request successful', url)),
      catchError((err) => this.handleError(err, 'PUT')),
      finalize(() => this.setLoading(false))
    );
  }

  delete(url: string): Observable<void> {
    this.setLoading(true);

    return this.http.delete<void>(url).pipe(
      tap(() => this.log('DELETE request successful', url)),
      catchError((err) => this.handleError(err, 'DELETE')),
      finalize(() => this.setLoading(false))
    );
  }

  private setLoading(isLoading: boolean): void {
    this.loadingSubject.next(isLoading);
  }

  private handleError(error: any, operation: string): Observable<never> {
    console.error(`Error occurred during ${operation}: ${error}`);
    throw error;
  }

  private log(message: string, url: string): void {
    console.log(`[ApiService] ${message}: ${url}`);
  }

  /**
   * Generates a unique idempotency key for API requests.
   * This helps prevent duplicate transactions in POST requests.
   * @returns string - Unique idempotency key
   */
  private generateIdempotencyKey(): string {
    return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
  }
}
