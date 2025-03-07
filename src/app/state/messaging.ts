// centralized state store message archive

// blog state
export const LOAD_BLOG_POSTS: string = '[Blog] Load Posts';
export const LOAD_BLOG_POSTS_SUCCESS: string = '[Blog] Load Posts: Successful';
export const LOAD_BLOG_POSTS_FAILURE: string = '[Blog] Load Posts: Failure';

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

}
