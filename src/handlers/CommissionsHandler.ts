import { Request, Response } from 'express';

import Handler from "./Handler";
import Commission from "../core/models/Commission";
import CommissionsService from "../services/CommissionsService";
import { makeResponse } from '../core/utils/ResponseUtils';

class CommissionsHandler extends Handler<CommissionsService, Commission> {
  constructor() {
    super(
      'commission',
      new CommissionsService(),
      ['client_attendance_id', 'value']
    );
  }

  async index(request: Request, response: Response): Promise<Response> {
    const { doctor_id } = request.params;

    if(!doctor_id.length) {
      return makeResponse(response, '', `need ${this.entityName} id param`);
    }

    try { Number(doctor_id) } catch {
      return makeResponse(response, '', 'wrong attendance_id param type');
    }

    return await this.execService(
      response,
      this.service.index,
      Number(doctor_id)
    );
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

    const { doctor_id } = request.params;

    if(!doctor_id.length) {
      return makeResponse(response, '', `need ${this.entityName} id param`);
    }

    try {
      Number(doctor_id);
      Number(request.body['client_attendance_id']);
    } catch {
      return makeResponse(response, '', 'wrong attendance_id param type');
    }

    const data = this.improver.createT({
      doctor_id: Number(doctor_id),
      ...request.body,
    });

    return await this.execService(
      response,
      this.service.add,
      data
    );
  }
}

export default CommissionsHandler;
