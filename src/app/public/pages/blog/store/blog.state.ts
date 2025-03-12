import { EntityState } from "@ngrx/entity";
import { BlogPost } from '../../../../core/data/schema';

// Define State
export interface BlogState extends EntityState<BlogPost> {
  loading: boolean;
  error: string | null;
}

