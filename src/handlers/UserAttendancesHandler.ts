import { Request, Response } from 'express';

import Handler from "./Handler";
import UserAttendance from "../core/models/UserAttendance";
import UserAttendancesService from "../services/UserAttendancesService";
import { makeResponse } from '../core/utils/ResponseUtils';
import { Controller, Delete, Get, Post, Put, Req, Res } from '@nestjs/common';

@Controller('api/core/users/:user_id')
class UserAttendancesHandler extends Handler<UserAttendancesService, UserAttendance> {
  constructor() {
    super(
      'user_attendance',
      new UserAttendancesService(),
      [
        'date',
        'services',
      ]
    );
  }

  @Get('user-attendances')
  async index(@Req() request: Request, @Res() response: Response): Promise<Response> {
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

  @Post('attendances/:attendance_id/user-attendances')
  async add(@Req() request: Request, @Res() response: Response): Promise<Response> {
    if(!request.body) {
      return makeResponse(response, 'no-data', 'need body data');
    }

    const emptyFields = this.verifyFields(request.body);

    if(emptyFields.length) {
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
      date: request.body['date']
    });

    data.user_id = Number(user_id);
    data.attendance_id = Number(attendance_id);

    return await this.execService(
      response,
      this.service.add,
      data,
      request.body['services']
    );
  }

  @Put('attendances/:attendance_id/user-attendances/:id')
  async update(@Req() request: Request, @Res() response: Response): Promise<Response> {
    if(!request.body) {
      return makeResponse(response, 'no-data', 'need body data');
    }

    const emptyFields = this.verifyFields(request.body);

    if(emptyFields.length === this.mFieldsLenght) {
      return makeResponse(response, 'bad-req', `one of ${emptyFields.join(', ')} fields are needed`);
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
      user_id: Number(user_id),
      attendance_id: Number(attendance_id),
      date: request.body['date']
    });

    data.id = Number(id);

    return await this.execService(
      response,
      this.service.update,
      data,
      request.body['services']
    );
  }

  @Delete('attendances/:attendance_id/user-attendances/:id')
  async delete(@Req() request: Request, @Res() response: Response): Promise<Response> {
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
