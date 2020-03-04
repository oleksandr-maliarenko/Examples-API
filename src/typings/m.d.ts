export {};
declare global {
  namespace jest {
    interface Matchers<R> {
      toBeOfSchema(schema: object): Promise<CustomMatcherResult>;
      toHaveStatusCode(statusCode: number): Promise<CustomMatcherResult>;
    }
  }
}
