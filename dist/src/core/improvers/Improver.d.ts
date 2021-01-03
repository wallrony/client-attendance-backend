declare class Improver<T> {
    private readonly mandatoryFields;
    constructor(mandatoryFields: string[]);
    createT(item: Record<string, any>): T;
    createTList(data: Array<Record<string, any>>): T[];
}
export default Improver;
