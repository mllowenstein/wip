import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { BlogService } from '../blog.service';
import BlogActions from './blog.actions';
import { catchError, map, mergeMap, of } from 'rxjs';
import LoginActions from '../../../../auth/login/store/login.actions';

@Injectable()
export class BlogEffects {

  // loadPosts effect
  loadPosts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(BlogActions.loadPosts),
      mergeMap(() =>
        this.blogService.getAllBlogPosts().pipe(
          map((posts) => BlogActions.loadPostsSuccess({ posts })),
          catchError((error) => of(BlogActions.loadPostsFailure({ error: error.message }))),
        )
      )
    )
  );

  // addPost effect

  // updatePost effect

  // deletePost effect

  // loadPosts effect

  // recordView effect

  constructor(
    private blogService: BlogService,
    private actions$: Actions,
  ) { }
}

