import * as Ajv from 'ajv';
import { JSONPath } from 'jsonpath-plus';
import * as draft6 from 'ajv/lib/refs/json-schema-draft-06.json';
const ajv: Ajv.Ajv = new Ajv();
ajv.addMetaSchema(draft6);

expect.extend({
  async toBeOfSchema(received: Promise<any>, schema: object) {
    let errMsg: string;
    let valid: boolean | PromiseLike<any>;
    try {
      valid = ajv.validate(schema, await received);
      if (!valid) {
        const errPath: string = ajv.errors[0].dataPath;
        const errValue: any = JSONPath({ path: `$${errPath}`, json: await received });
        const ajvMsg: string = ajv.errors[0].message;
        ajvMsg.includes('required property')
          ? (errMsg = `Object ${ajvMsg}`)
          : (errMsg = `Value: "${JSON.stringify(errValue, null, 4)}" at path: "${errPath}" ${ajvMsg}`);
        console.info(`Full response was: \n${JSON.stringify(await received, null, 4)}`);
      }
    } catch (err) {
      return {
        message: () => `Failed to validate Object: \n${err}`,
        pass: false,
      };
    }
    if (await valid) {
      return {
        message: () => `Objects is successfully validated against Schema`,
        pass: true,
      };
    }
    return {
      message: () => errMsg,
      pass: false,
    };
  },
});

expect.extend({
  async toHaveStatusCode(received: Promise<any>, statusCode: number) {
    const res: any = await received;
    const valid: boolean = (await res.status) === statusCode;
    if (valid) {
      return {
        message: () => `Status code is correct`,
        pass: true,
      };
    }
    return {
      message: () => `Expected status to equal ${statusCode}, but got ${res.status}`,
      pass: false,
    };
  },
});

// exporting nothing just to be able to import it
export default undefined;
