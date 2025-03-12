import { Injectable } from '@angular/core';
import LoginActions from './login.actions';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap, tap } from 'rxjs';

@Injectable()
export class LoginEffects {
  requestOtp$ = createEffect(() =>
    this.actions$.pipe(
      ofType(LoginActions.requestOtp),
      tap(({ email }) => console.log(`Sending OTP to ${email}`)),
      map(() => LoginActions.loginSuccess({ token: 'mock-token' }))
    )
  );

  verifyOtp$ = createEffect(() =>
    this.actions$.pipe(
      ofType(LoginActions.verifyOtp),
      switchMap(({ email, otp }) => {
        console.log(`Verifying OTP for ${email}`);
        return of(LoginActions.loginSuccess({ token: 'mock-token' })).pipe(
          catchError(() => of(LoginActions.loginFailure({ error: 'Invalid OTP' })))
        );
      })
    )
  );

  constructor(private actions$: Actions) {}
}
