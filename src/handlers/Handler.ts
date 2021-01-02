import { Response } from "express";
import Improver from "../core/improvers/Improver";
import Model from "../core/models/Model";
import ServiceResponse from "../core/models/ServiceResponse";
import { makeResponse } from "../core/utils/ResponseUtils";
import Service from "../services/Service";

abstract class Handler<S extends Service, T extends Model> {
  protected readonly entityName: string;
  protected readonly service: S;
  private readonly mandatoryFields;
  protected readonly mFieldsLenght;
  protected readonly improver;

  constructor(entityName: string, service: S, mandatoryFields: string[]) {
    this.entityName = entityName;
    this.service = service;
    this.mandatoryFields = mandatoryFields;
    this.mFieldsLenght = mandatoryFields.length;
    this.improver = new Improver<T>(mandatoryFields);
  }

  /**
   * 
   * @param response Response
   * @param func Function
   * @param args any[]
   * 
   * Executa uma função de serviço definido no genérico e
   * procede de forma genérica utilizada por todos os request
   * handlers.
   */
  protected async execService(response: Response, func: Function, ...args: any[]): Promise<Response> {
    const result: ServiceResponse<T> = await func(...args);

    if(result.err) {
      return makeResponse(response, result.err.name, result.err.message);
    }

    return makeResponse(response, 'success', result.data);
  }

  /**
   * Verifica os campos obrigatórios (mandatoryFields) e
   * retorna uma lista de strings com todos os campos faltantes.
   */
  protected verifyFields(body: Record<string, any>): string[] {
    const emptyFields: string[] = [];

    for (const field of this.mandatoryFields) {
      if (!body[field]) {
        emptyFields.push(field);
      }
    }

    return emptyFields;
  }
}

export default Handler;
