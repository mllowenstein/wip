import { createAction, createFeature, createReducer, on, props } from '@ngrx/store';
import { createEntityAdapter, EntityState } from '@ngrx/entity';
import { BlogPost } from '../../../../core/data/schema';
import { blogReducer } from './blog.reducer';

export const blogAdapter = createEntityAdapter<BlogPost>({
  selectId: (post) => post.id,
  sortComparer: (a, b) => b.date.toDateString().localeCompare(a.date.toDateString())
});

export const blogFeature = createFeature({
  name: 'blog',
  reducer: blogReducer,
});
