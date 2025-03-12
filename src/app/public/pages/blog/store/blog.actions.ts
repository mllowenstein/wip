import { createAction, props } from '@ngrx/store';
import { MESSAGES as msg } from '../../../../state/messaging';
import { BlogPost } from '../../../../core/data/schema';

const loadPosts = createAction(msg.BlogStates.LoadFeed);
const loadPostsSuccess = createAction(msg.BlogStates.LoadFeedSuccess, props<{ posts: BlogPost[] }>());
const loadPostsFailure = createAction(msg.BlogStates.LoadFeedFailure, props <{ error: string }>());

const addPost = createAction(msg.BlogStates.AddPost, props<{ post: BlogPost }>());
const updatePost = createAction(msg.BlogStates.UpdatePost, props<{ post: BlogPost }>());
const deletePost = createAction(msg.BlogStates.DeletePost, props<{ id: string }>());
const recordView = createAction(msg.BlogStates.RecordView, props<{ id: string }>());

const BlogActions = {
  loadPosts, loadPostsSuccess, loadPostsFailure, addPost, updatePost, deletePost, recordView
};

export default BlogActions;