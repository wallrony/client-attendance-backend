import { Request, Response } from 'express';

import Handler from "./Handler";
import Attendance from "../core/models/Attendance";
import AttendancesService from "../services/AttendancesService";
import { makeResponse } from '../core/utils/ResponseUtils';

class AttendanceHandler extends Handler<AttendancesService, Attendance> {
  constructor() {
    super(
      'attendance',
      new AttendancesService(),
      ['title']
    );
  }

  async index(request: Request, response: Response) {
    return await this.execService(
      response,
      this.service.index
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

    const data = this.improver.createT(request.body);

    return await this.execService(
      response,
      this.service.add,
      data,
    );
  }

  async update(request: Request, response: Response) {
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
    
    const data = this.improver.createT({
      id: Number(id),
      ...request.body
    });

    return await this.execService(
      response,
      this.service.update,
      data,
    );
  }

  async delete(request: Request, response: Response) {
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
      Number(id),
    );
  }
}

export default AttendanceHandler;
