import { createReducer, on } from '@ngrx/store';
import LoginActions from './login.actions';
import { initialState } from './login.state';

export const loginReducer = createReducer(
  initialState,
  on(LoginActions.requestOtp, (state, { email }) => ({ ...state, email, otpRequested: true })),
  on(LoginActions.verifyOtp, (state) => ({ ...state, loading: true })),
  on(LoginActions.loginSuccess,  (state, { token }) => ({ ...state, loading: false, token })),
  on(LoginActions.loginFailure, (state, { error }) => ({ ...state, loading: false, error })),
);
