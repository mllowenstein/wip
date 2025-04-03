import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './blog.component';
import { ArticleComponent } from './article/article.component';
import { NewPostComponent } from './new-post/new-post.component';
import { EditPostComponent } from './edit-post/edit-post.component';
import { DeletePostComponent } from './delete-post/delete-post.component';

const routes: Routes = [
  { path: 'feed', component: BlogComponent },
  { path: 'feed/:id', component: ArticleComponent },
  { path: 'feed/create', component: NewPostComponent },
  { path: 'feed/:id/edit', component: EditPostComponent },
  { path: 'feed/:id/delete', component: DeletePostComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRouting { }
