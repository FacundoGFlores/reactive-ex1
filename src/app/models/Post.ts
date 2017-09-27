import { Comment } from './Comment';

export interface Post {
  userId: Number;
  id: Number;
  title: String;
  body: String;
  comments: Array<Comment>;
}
