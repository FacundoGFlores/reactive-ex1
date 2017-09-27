import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { PostsService } from 'app/services/posts.service';
import { Post } from 'app/models/Post';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {
  public posts$: Observable<Array<Post>>;

  constructor(private router: Router, private postsService: PostsService) { }

  ngOnInit() {
    this.posts$ = this.postsService.getPosts();
  }

  viewPost(id) {
    this.router.navigate(['/post', id]);
  }

}
