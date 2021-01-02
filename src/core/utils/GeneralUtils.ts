export function createError(name: string, message?: string): Error {
  const err = Error();

  err.name = name;
  err.message = message ?? '';

  return err;
}
