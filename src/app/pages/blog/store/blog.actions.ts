import { createAction, props } from '@ngrx/store';
import { MESSAGES as msg } from '../../../state/messaging';
import { BlogPost } from '../../../core/data/schema';

export const loadPosts = createAction(msg.BlogStates!.LoadFeed);
export const loadPostsSuccess = createAction(msg.BlogStates!.LoadFeedSuccess, props<{ posts: BlogPost[] }>());
export const loadPostsFailure = createAction(msg.BlogStates!.LoadFeedFailure, props < { error: string }>);

export const addPost = createAction(msg.BlogStates!.AddPost, props<{ post: BlogPost }>());
export const updatePost = createAction(msg.BlogStates!.UpdatePost, props<{ post: BlogPost }>());
export const deletePost = createAction(msg.BlogStates!.DeletePost, props<{ id: string }>());
export const recordView = createAction(msg.BlogStates!.RecordView, props<{ id: string }>());
