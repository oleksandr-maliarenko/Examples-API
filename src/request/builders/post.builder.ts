import IPost from '../models/post.model';

export default class PostBuilder {
  public model: IPost;
  constructor() {
    this.model = {
      userId: undefined,
      id: undefined,
      title: undefined,
      body: undefined,
    };
  }

  setUserId(userId: number): PostBuilder {
    this.model.userId = userId;
    return this;
  }

  setId(id: number): PostBuilder {
    this.model.id = id;
    return this;
  }

  setTitle(title: string): PostBuilder {
    this.model.title = title;
    return this;
  }

  setBody(body: string): PostBuilder {
    this.model.body = body;
    return this;
  }
  build(): IPost {
    return this.model;
  }
}
