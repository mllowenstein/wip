import { EntityState } from "@ngrx/entity";
import { BlogPost } from '../../../core/data/schema';
import { blogAdapter } from "./blog.store";

// Define State
export interface BlogState extends EntityState<BlogPost> {
  loading: boolean;
  error: string | null;
}

export const initialState: BlogState = blogAdapter.getInitialState({
  loading: false,
  error: null,
});
