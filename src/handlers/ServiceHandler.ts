import { Request, Response } from 'express';

import Handler from "./Handler";
import Service from "../core/models/Service";
import ServicesService from "../services/ServicesService";
import { makeResponse } from '../core/utils/ResponseUtils';

class ServiceHandler extends Handler<ServicesService, Service> {
  constructor() {
    super(
      'service',
      new ServicesService(),
      [
        'attendance_id',
        'name',
        'description',
        'price',
        'duration',
      ]
    )
  }

  async index(request: Request, response: Response): Promise<Response> {
    const { attendance_id } = request.params;

    if(!attendance_id.length) {
      return makeResponse(response, '', `need ${this.entityName} id param`);
    }

    try { Number(attendance_id) } catch {
      return makeResponse(response, '', `wrong ${this.entityName}_id param type`);
    }

    return await this.execService(
      response,
      this.service.index,
      Number(attendance_id)
    )
  }

  async add(request: Request, response: Response): Promise<Response> {
    if(!request.body.length) {
      return makeResponse(response, 'no-data', 'need body data');
    }

    const emptyFields = this.verifyFields(request.body);

    if(emptyFields.length === this.mFieldsLenght) {
      return makeResponse(response, 'no-data', 'need data in request body');
    } else if(emptyFields.length) {
      return makeResponse(response, 'bad-req', `${emptyFields.join(', ')} fields are needed`);
    }

    const data: Service = this.improver.createT({ ...request.body });

    return await this.execService(
      response,
      this.service.add,
      data
    );
  }

  async update(request: Request, response: Response): Promise<Response> {
    if(!request.body.length) {
      return makeResponse(response, 'no-data', 'need body data');
    }

    const emptyFields = this.verifyFields(request.body);

    if(emptyFields.length === this.mFieldsLenght) {
      return makeResponse(response, 'no-data', 'need data in request body');
    } else if(emptyFields.length) {
      return makeResponse(response, 'bad-req', `${emptyFields.join(', ')} fields are needed`);
    }

    const { id } = request.params;

    if(!id.length) {
      return makeResponse(response, '', `need ${this.entityName} id param`);
    }

    try { Number(id) } catch {
      return makeResponse(response, '', `wrong ${this.entityName}_id param type`);
    }

    const data: Service = this.improver.createT({
      id: Number(id),
      ...request.body
    });

    return await this.execService(
      response,
      this.service.update,
      data
    );
  }

  async delete(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    if(!id.length) {
      return makeResponse(response, '', `need ${this.entityName} id param`);
    }

    try { Number(id) } catch {
      return makeResponse(response, '', `wrong ${this.entityName}_id param type`);
    }

    return await this.execService(
      response,
      this.service.delete,
      Number(id)
    );
  }
}

export default ServiceHandler;
