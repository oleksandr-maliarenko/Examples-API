import { postTypesResponse } from '../../src/response/models-response/post.types.reponse';
import Expect from '../../src/utils/assertions';
import { builtHeaders } from '../../src/request/built-objects/built.headers';
import * as loginSchema from '../../src/response/schema/posts/actions/post.json';
import { builtPostRequest } from '../../src/request/built-objects/built.post';
import PostsController from '../../src/controllers/posts.controller';
import { Response } from 'node-fetch';

describe('Posts', () => {
  test('User is able to add a new Post', async () => {
    const res: Response = await PostsController.addPost(builtHeaders, builtPostRequest);
    const expect: Expect = new Expect(res);
    await expect.statusCodeToEqual(201);
    // validate against schema using AJV
    await expect.responseSchemaToEqual(loginSchema);
    // another way to validate object is against JOI schema
    // await expect.responseBodyTypeToBe(postTypesResponse);
  });
});
