export default interface ServiceResponse<T> {
  data?: T;
  err?: Error;
}