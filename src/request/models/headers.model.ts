export default interface IHeaders {
  authorization?: string;
  'Content-Type': string;
  'X-Operator'?: string;
  'X-Domain'?: string;
  'cf-ipcountry'?: string;
  'country-ip-override'?: string;
}
