// centralized state store message archive

// login states
export const LOGIN_REQUEST_OTP: string = '[Login] Request OTP';
export const LOGIN_REQUEST_OTP_SUCCESS: string = '[Login] Request OTP Success';
export const LOGIN_REQUEST_OTP_FAILURE: string = '[Login] Request OTP Failure';
export const LOGIN_VERIFY_OTP: string = '[Login] Verify OTP';
export const LOGIN_FAILURE: string = '[Login] Login Failure';
export const LOGIN_SUCCESS: string = '[Login] Login Success';

// blog states
export const LOAD_BLOG_POSTS: string = '[Blog] Load Posts';
export const LOAD_BLOG_POSTS_SUCCESS: string = '[Blog] Load Posts: Successful';
export const LOAD_BLOG_POSTS_FAILURE: string = '[Blog] Load Posts: Failure';
// crud blog states
export const ADD_BLOG_POST: string = '[Blog] Add New Post';
export const UPDATE_BLOG_POST: string = '[Blog] Updated a Post';
export const DELETE_BLOG_POST: string = '[Blog] Delete a Post';
export const ADD_POST_VIEW: string = '[Blog] New Viewer';

export const MESSAGES: any = {
  BlogStates: {
    LoadFeed: LOAD_BLOG_POSTS,
    LoadFeedSuccess: LOAD_BLOG_POSTS_SUCCESS,
    LoadFeedFailure: LOAD_BLOG_POSTS_FAILURE,
    AddPost: ADD_BLOG_POST,
    UpdatePost: UPDATE_BLOG_POST,
    DeletePost: DELETE_BLOG_POST,
    RecordView: ADD_POST_VIEW,
  },
  LoginStates: {
    RequestOTP: LOGIN_REQUEST_OTP,
    RequestOTPSuccess: LOGIN_REQUEST_OTP_SUCCESS,
    RequestOTPFailure: LOGIN_REQUEST_OTP_FAILURE,
    VerifyOTP: LOGIN_VERIFY_OTP,
    LoginFailure: LOGIN_FAILURE,
    LoginSuccess: LOGIN_SUCCESS,
  }
}
