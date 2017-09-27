import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { PostsService } from 'app/services/posts.service';
import { Post } from 'app/models/Post';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit, OnDestroy {
  private routeSubscription: any;
  public post$: Observable<Post>;

  constructor(
    private location: Location,
    private route: ActivatedRoute,
    private postsService: PostsService
  ) { }

  ngOnInit() {
    this.routeSubscription = this.route.params.subscribe(params => {
      const postId = +params['id'];
      this.post$ = this.postsService.getPostWithComments(postId);
    });
  }

  ngOnDestroy() {
    this.routeSubscription.unsubscribe();
  }

  goBack() {
    this.location.back();
  }
}
