export interface LoginState {
  email: string;
  otpRequested: boolean;
  loading: boolean;
  token: string | null;
  error: string | null;
}

export const initialState: LoginState = {
  email: '',
  otpRequested: false,
  loading: false,
  token: null,
  error: null,
};
