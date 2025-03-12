import { createAction, createFeature, createReducer, on, props } from '@ngrx/store';
import BlogActions from './blog.actions';
import { blogAdapter, initialState } from './blog.store';

export const blogReducer = createReducer(
  initialState,
  on(BlogActions.loadPostsSuccess, (state, { posts }) => blogAdapter.setAll(posts, { ...state, loading: false })),
  on(BlogActions.loadPostsFailure, (state, { error }) => ({ ...state, loading: false, error })),
  on(BlogActions.addPost, (state, { post }) => blogAdapter.addOne(post, state)),
  on(BlogActions.updatePost, (state, { post }) => blogAdapter.updateOne({ id: post.id, changes: post }, state)),
  on(BlogActions.deletePost, (state, { id }) => blogAdapter.removeOne(id, state)),
  on(BlogActions.recordView, (state, { id }) => {
    const post = state.entities[id];
    return post
      ? blogAdapter.updateOne({ id, changes: { views: post.views + 1 } }, state)
      : state;
  })
);
