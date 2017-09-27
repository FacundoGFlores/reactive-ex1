/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { ModuleWithProviders } from '@angular/core/src/metadata/ng_module';
import { Routes, RouterModule } from '@angular/router';
import { PostListComponent } from 'app/components/posts/post-list/post-list.component';
import { PostComponent } from 'app/components/posts/post/post.component';


export const ROUTES: Routes = [
  { path: '', redirectTo: 'posts', pathMatch: 'full' },
  { path: 'posts', component: PostListComponent },
  { path: 'post/:id', component: PostComponent }
];

export const ROUTING: ModuleWithProviders = RouterModule.forRoot(ROUTES);
