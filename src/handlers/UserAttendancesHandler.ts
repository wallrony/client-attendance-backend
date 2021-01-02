import { Request, Response } from 'express';

import Handler from "./Handler";
import UserAttendance from "../core/models/UserAttendance";
import UserAttendancesService from "../services/UserAttendancesService";
import { makeResponse } from '../core/utils/ResponseUtils';

class UserAttendancesHandler extends Handler<UserAttendancesService, UserAttendance> {
  constructor() {
    super(
      'user_attendance',
      new UserAttendancesService(),
      [
        'attendance_id',
        'user_id',
        'date',
        'services',
      ]
    );
  }

  async index(request: Request, response: Response): Promise<Response> {
    const { user_id } = request.params;

    if(!user_id.length) {
      return makeResponse(response, '', `need ${this.entityName} id param`);
    }

    try { Number(user_id) } catch {
      return makeResponse(response, '', `wrong ${this.entityName}_id param type`);
    }

    return await this.execService(
      response,
      this.service.index,
      Number(user_id)
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

    const { user_id, attendance_id } = request.params;

    if(!attendance_id.length || !user_id.length) {
      return makeResponse(response, '', `need ${this.entityName} id param`);
    }

    try {
      Number(user_id);
      Number(attendance_id);
    } catch {
      return makeResponse(response, '', `wrong ${this.entityName}_id param type`);
    }

    const data: UserAttendance = this.improver.createT({
      user_id,
      attendance_id,
      ...request.body
    });

    return await this.execService(
      response,
      this.service.add,
      data,
      request.body.services
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

    const { id, user_id, attendance_id } = request.params;

    if(!id.length || !attendance_id.length || !user_id.length) {
      return makeResponse(response, '', `need ${this.entityName} id param`);
    }

    try {
      Number(id);
      Number(user_id);
      Number(attendance_id);
    } catch {
      return makeResponse(response, '', `wrong ${this.entityName}_id param type`);
    }

    const data: UserAttendance = this.improver.createT({
      id: Number(id),
      user_id: Number(user_id),
      attendance_id: Number(attendance_id),
      ...request.body
    });

    return await this.execService(
      response,
      this.service.update,
      data,
      request.body.services
    );
  }

  async delete(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    if(!id.length) {
      return makeResponse(response, '', `need ${this.entityName} id param`);
    }

    try {
      Number(id);
    } catch {
      return makeResponse(response, '', `wrong ${this.entityName}_id param type`);
    }

    return await this.execService(
      response,
      this.service.delete,
      Number(id)
    );
  }
}

export default UserAttendancesHandler;
