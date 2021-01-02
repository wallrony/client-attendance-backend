import { Request, Response } from 'express';

import Doctor from "../core/models/Doctor";
import { makeResponse } from '../core/utils/ResponseUtils';
import DoctorsService from "../services/DoctorsService";
import Handler from "./Handler";

class DoctorsHandler extends Handler<DoctorsService, Doctor> {
  constructor() {
    super(
      'doctor',
      new DoctorsService(),
      ['crm', 'attendance_id'],
    );
  }

  async show(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    if(!id.length) {
      return makeResponse(response, '', `need ${this.entityName} id param`);
    }

    try { Number(id) } catch {
      return makeResponse(response, '', `wrong ${this.entityName}_id param type`);
    }

    return await this.execService(
      response,
      this.service.show,
      Number(id)
    );
  }

  async update(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    if(!id.length) {
      return makeResponse(response, '', `need ${this.entityName} id param`);
    }

    try { Number(id) } catch {
      return makeResponse(response, '', `wrong ${this.entityName}_id param type`);
    }

    if(!request.body.length) {
      return makeResponse(response, 'no-data', 'need body data');
    }

    const emptyFields = this.verifyFields(request.body);

    if(emptyFields.length === this.mFieldsLenght) {
      return makeResponse(response, 'no-data', 'need data in request body');
    } else if(emptyFields.length) {
      return makeResponse(response, 'bad-req', `${emptyFields.join(', ')} fields are needed`);
    }

    const data: Doctor = this.improver.createT({
      id: Number(id),
      ...request.body
    });

    return await this.execService(
      response,
      this.service.update,
      data
    );
  }
}

export default DoctorsHandler;
