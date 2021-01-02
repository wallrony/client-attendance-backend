class Improver<T> {
  private readonly mandatoryFields

  constructor(mandatoryFields: string[]) {
    this.mandatoryFields = mandatoryFields;
  }

  createT(item: Record<string, any>): T {

    let data: Record<string, any> = {};

    for(const attr of Object.keys(item)) {
      if(this.mandatoryFields.includes(attr)) {
        item[attr] = data[attr]
      }
    }

    return data as T;
  }

  createTList(data: Array<Record<string, any>>): T[] {
    const list: T[] = [];

    for(const item of data) {
      list.push(this.createT(item));
    }

    return list;
  }
}

export default Improver;
