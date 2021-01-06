import { Request, Response } from 'express';

import Handler from "./Handler";
import Attendance from "../core/models/Attendance";
import AttendancesService from "../services/AttendancesService";
import { makeResponse } from '../core/utils/ResponseUtils';
import { Controller, Delete, Get, Param, Post, Put, Req, Res } from '@nestjs/common';

@Controller('api/core/attendances')
class AttendancesHandler extends Handler<AttendancesService, Attendance> {
  constructor() {
    super(
      'attendance',
      new AttendancesService(),
      ['title']
    );
  }

  @Get()
  async index(@Req() request: Request, @Res() response: Response) {
    return await this.execService(
      response,
      this.service.index
    );
  }

  @Post()
  async add(@Req() request: Request, @Res() response: Response): Promise<Response> {
    if(!request.body) {
      return makeResponse(response, 'no-data', 'need body data');
    }

    const emptyFields = this.verifyFields(request.body);

    if(emptyFields.length) {
      return makeResponse(response, 'bad-req', `${emptyFields.join(', ')} fields are needed`);
    }

    const data = this.improver.createT(request.body);

    if(request.body['services']) {
      data.services = request.body['services'];
    }

    return await this.execService(
      response,
      this.service.add,
      data,
    );
  }

  @Put('/:id')
  async update(@Req() request: Request, @Res() response: Response) {
    if(!request.body) {
      return makeResponse(response, 'no-data', 'need body data');
    }

    const emptyFields = this.verifyFields(request.body);

    if(emptyFields.length === this.mFieldsLenght) {
      return makeResponse(response, 'bad-req', `one of ${emptyFields.join(', ')} fields are needed`);
    }

    const { id } = request.params;

    if(!id.length) {
      return makeResponse(response, '', `need ${this.entityName} id param`);
    }

    try { Number(id) } catch {
      return makeResponse(response, '', `wrong ${this.entityName}_id param type`);
    }
    
    const data = this.improver.createT({
      ...request.body
    });

    data['id'] = id;

    return await this.execService(
      response,
      this.service.update,
      data,
    );
  }

  @Delete('/:id')
  async delete(@Req() request: Request, @Res() response: Response) {
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

export default AttendancesHandler;
