import IHeaders from '../models/headers.model';

export default class HeaderBuilder {
  private model: IHeaders;
  constructor() {
    this.model = {
      'Content-Type': 'application/json',
    };
  }

  setAuthorization(id: string): HeaderBuilder {
    this.model.authorization = id;
    return this;
  }

  setContentType(contentType: string): HeaderBuilder {
    this.model['Content-Type'] = contentType;
    return this;
  }

  setHeaderKeyValue(key: string, value: string): HeaderBuilder {
    this.model[key] = value;
    return this;
  }

  build(): IHeaders {
    return this.model;
  }
}
