import { Response } from "express";
import Model from "../core/models/Model";
import Service from "../services/Service";
declare abstract class Handler<S extends Service, T extends Model> {
    protected readonly entityName: string;
    protected readonly service: S;
    private readonly mandatoryFields;
    protected readonly mFieldsLenght: any;
    protected readonly improver: any;
    constructor(entityName: string, service: S, mandatoryFields: string[]);
    protected execService(response: Response, func: Function, ...args: any[]): Promise<Response>;
    protected verifyFields(body: Record<string, any>): string[];
}
export default Handler;
