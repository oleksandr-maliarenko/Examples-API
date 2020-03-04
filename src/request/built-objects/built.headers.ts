import HeadersBuilder from '../builders/headers.builder';
import IHeaders from '../models/headers.model';

export function buildHeaders(): IHeaders {
  return new HeadersBuilder().build();
}
export const builtHeaders: IHeaders = buildHeaders();
