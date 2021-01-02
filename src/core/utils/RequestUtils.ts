export function getUserId(path: string) {
  const paramList = path.split('/');

  const index = paramList.indexOf('users');
  const id = paramList[index + 1];

  return id ? Number(id) : null;
}