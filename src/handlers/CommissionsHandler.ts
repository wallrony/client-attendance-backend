import { Request, Response } from 'express';

import Handler from "./Handler";
import Commission from "../core/models/Commission";
import CommissionsService from "../services/CommissionsService";
import { makeResponse } from '../core/utils/ResponseUtils';
import { Controller, Get, Post, Req, Res } from '@nestjs/common';

@Controller('/api/core/doctor/:doctor_id/commissions')
class CommissionsHandler extends Handler<CommissionsService, Commission> {
  constructor() {
    super(
      'commission',
      new CommissionsService(),
      ['doctor_id', 'client_attendance_id', 'value']
    );
  }

  @Get()
  async index(@Req() request: Request, @Res() response: Response): Promise<Response> {
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

  @Post()
  async add(@Req() request: Request, @Res() response: Response): Promise<Response> {
    const { doctor_id } = request.params;

    if(!doctor_id.length) {
      return makeResponse(response, '', `need ${this.entityName} id param`);
    }

    const body = request.body;

    body['doctor_id'] = doctor_id;

    if(!body) {
      return makeResponse(response, 'no-data', 'need body data');
    }

    const emptyFields = this.verifyFields(body);

    if(emptyFields.length) {
      return makeResponse(response, 'bad-req', `${emptyFields.join(', ')} fields are needed`);
    }

    try {
      Number(doctor_id);
      Number(body['client_attendance_id']);
    } catch {
      return makeResponse(response, '', 'wrong attendance_id param type');
    }
    const data = this.improver.createT({
      ...body
    });

    return await this.execService(
      response,
      this.service.add,
      data
    );
  }
}

export default CommissionsHandler;
