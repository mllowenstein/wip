import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogComponent } from './blog.component';
import { ArticleComponent } from './article/article.component';
import { EditPostComponent } from './edit-post/edit-post.component';
import { NewPostComponent } from './new-post/new-post.component';
import { DeletePostComponent } from './delete-post/delete-post.component';
import { MyOwnMaterialModule } from '../../core/material';
import { BlogRouting } from './blog.routing';
import { HttpClientModule } from '@angular/common/http';
import { ModalModule } from '../../shared/modal/modal.module';
import { FormModule } from '../../shared/form/form.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BlogService } from './blog.service';

@NgModule({
  declarations: [
    BlogComponent,
    ArticleComponent,
    EditPostComponent,
    NewPostComponent,
    DeletePostComponent
  ],
  imports: [
    CommonModule,
    MyOwnMaterialModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    FormModule,
    ModalModule,
    BlogRouting,
  ],
  providers: [BlogService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
})
export class BlogModule { }
