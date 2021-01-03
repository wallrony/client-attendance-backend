import { Controller, Get, Put, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';

import Doctor from "../core/models/Doctor";
import { makeResponse } from '../core/utils/ResponseUtils';
import DoctorsService from "../services/DoctorsService";
import Handler from "./Handler";

@Controller('/api/accounts/doctors')
class DoctorsHandler extends Handler<DoctorsService, Doctor> {
  constructor() {
    super(
      'doctor',
      new DoctorsService(),
      ['crm', 'attendance_id'],
    );
  }

  @Get(':id')
  async show(@Req() request: Request, @Res() response: Response): Promise<Response> {
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

  @Put(':id')
  async update(@Req() request: Request, @Res() response: Response): Promise<Response> {
    const { id } = request.params;

    if(!id.length) {
      return makeResponse(response, '', `need ${this.entityName} id param`);
    }

    try { Number(id) } catch {
      return makeResponse(response, '', `wrong ${this.entityName}_id param type`);
    }

    if(!request.body) {
      return makeResponse(response, 'no-data', 'need body data');
    }

    const emptyFields = this.verifyFields(request.body);

    if(emptyFields.length === this.mFieldsLenght) {
      return makeResponse(response, 'bad-req', `one of ${emptyFields.join(', ')} fields are needed`);
    }

    const data: Doctor = this.improver.createT({
      ...request.body
    });

    data.id = Number(id);

    return await this.execService(
      response,
      this.service.update,
      data
    );
  }
}

export default DoctorsHandler;
