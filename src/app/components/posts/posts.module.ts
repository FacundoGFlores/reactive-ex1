import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClarityModule } from 'clarity-angular';
import { PostComponent } from './post/post.component';
import { PostListComponent } from './post-list/post-list.component';

@NgModule({
  imports: [CommonModule, ClarityModule],
  declarations: [PostComponent, PostListComponent],
  exports: [PostComponent, PostListComponent]
})
export class PostsModule { }
