import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Post } from 'app/models/Post';

import 'rxjs/add/observable/combineLatest';

const ROOT_URL = 'https://jsonplaceholder.typicode.com';

@Injectable()
export class PostsService {

  constructor(private http: HttpClient) { }

  getPosts(): Observable<Array<Post>> {
    return this.http.get<Post[]>(`${ROOT_URL}/posts`);
  }

  getPost(id): Observable<Post> {
    return this.http.get<Post>((`${ROOT_URL}/posts/${id}`));
  }

  getCommentsByPost(id): Observable<Comment> {
    return this.http.get<Comment>((`${ROOT_URL}/posts/${id}/comments`));
  }

  getPostWithComments(postId: Number): Observable<Post> {
    const post$ = this.getPost(postId);
    const commentsByPost$ = this.getCommentsByPost(postId);
    return Observable.combineLatest<Post>(post$, commentsByPost$,
      (post, comments) => {
        return {
          ...post, comments
        };
      }
    )
  }
}
