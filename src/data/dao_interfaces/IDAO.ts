class IDAO {
  protected entityName: string;
  protected tableName: string;

  constructor(entityName: string, tableName: string) {
    this.entityName = entityName;
    this.tableName = tableName;
  }
}

export default IDAO;
