import Request from '../utils/api.requests';
import { post } from '../generics/default-constants/http.constants';
import { postsEndpoint } from '../generics/default-constants/endpoints';
import { Response } from 'node-fetch';
import IHeaders from '../request/models/headers.model';
import IPost from '../request/models/post.model';

export default class PostsController {
  static addPost(headers: IHeaders, postObject: IPost): Promise<Response> {
    return new Request(postsEndpoint).withMethodAndParameters(post, headers, postObject);
  }
}
