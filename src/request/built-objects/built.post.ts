import IPost from '../models/post.model';
import PostBuilder from '../builders/post.builder';
import { randomUserId, randomId, randomTitle, randomDescription } from '../../generics/generated-constants/generated.constants';

export function buildPostRequest(uId: number, id: number, title: string, body: string): IPost {
  return new PostBuilder()
    .setUserId(uId)
    .setId(id)
    .setTitle(title)
    .setBody(body)
    .build();
}
export const builtPostRequest: IPost = buildPostRequest(randomUserId, randomId, randomTitle, randomDescription);
