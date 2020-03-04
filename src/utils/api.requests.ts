import fetch, { Response } from 'node-fetch';
import { config } from 'dotenv';

config();

export default class APIRequest {
  private baseURL: string = `${process.env.BASE_URL}`;
  private readonly uri: string;

  constructor(relativeURL: string) {
    this.uri = `${this.baseURL}${relativeURL}`;
  }

  public async withMethodAndParameters(method: string, headers: any, body: any): Promise<Response> {
    return await fetch(this.uri, {
      method,
      headers,
      body: JSON.stringify(body),
    });
  }
}
