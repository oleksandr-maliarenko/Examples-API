import * as Joi from '@hapi/joi';
import { Response } from 'node-fetch';
import './custom.matcher';

export default class Expect {
  private res: Response;
  private json: Promise<any>;
  constructor(response: Response) {
    this.res = response;
    this.json = this.res.json();
  }
  async statusCodeToEqual(code: number): Promise<any> {
    await expect(this.res).toHaveStatusCode(code);
  }

  async responseBodyTypeToBe(schema: Joi.Schema): Promise<any> {
    Joi.assert(await this.json, schema);
  }

  async responseSchemaToEqual(schema: object): Promise<any> {
    await expect(await this.json).toBeOfSchema(schema);
  }
}
