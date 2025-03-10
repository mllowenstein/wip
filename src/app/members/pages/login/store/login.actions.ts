import { createAction, props } from '@ngrx/store';
import { MESSAGES } from '../../../../state/messaging';

const messages = MESSAGES.LoginStates;

const requestOtp = createAction(messages.RequestOTP, props<{ email: string }>());
const verifyOtp = createAction(messages.VerifyOTP, props<{ email: string, otp: string }>());
const loginSuccess = createAction(messages.LoginSuccess, props<{ token: string }>());
const loginFailure = createAction(messages.LoginFailure, props<{ error: string }>());

const LoginActions = { requestOtp, verifyOtp, loginSuccess, loginFailure };

export default LoginActions;
