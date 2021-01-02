export default class Improver {
  create<T>(data: Record<string, any>): T {
    const obj = data as T;

    return obj;
  }
  createList<T>(data: Array<Record<string, any>>): T[] {
    const list = data as T[];

    return list;
  }
}