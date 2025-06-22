import { createAction, createFeature, createReducer, on, props } from '@ngrx/store';
import { createEntityAdapter, EntityState } from '@ngrx/entity';
import { BlogPost } from '../../../core/data/schema';
import { loginReducer } from './login.reducer';

export const loginFeature = createFeature({
  name: 'login',
  reducer: loginReducer,
});
