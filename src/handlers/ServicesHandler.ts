import { Request, Response } from 'express';

import Handler from "./Handler";
import Service from "../core/models/Service";
import ServicesService from "../services/ServicesService";
import { makeResponse } from '../core/utils/ResponseUtils';
import { Controller, Delete, Get, Post, Put, Req, Res } from '@nestjs/common';

@Controller('api/core/attendances/:attendance_id/services')
class ServicesHandler extends Handler<ServicesService, Service> {
  constructor() {
    super(
      'service',
      new ServicesService(),
      [
        'name',
        'description',
        'price',
        'duration',
      ]
    )
  }

  @Get()
  async index(@Req() request: Request, @Res() response: Response): Promise<Response> {
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

  @Post()
  async add(@Req() request: Request, @Res() response: Response): Promise<Response> {
    if(!request.body) {
      return makeResponse(response, 'no-data', 'need body data');
    }

    const emptyFields = this.verifyFields(request.body);

    if(emptyFields.length) {
      return makeResponse(response, 'bad-req', `${emptyFields.join(', ')} fields are needed`);
    }

    const { attendance_id } = request.params;

    if(!attendance_id.length) {
      return makeResponse(response, '', `need ${this.entityName} id param`);
    }

    try { Number(attendance_id) } catch {
      return makeResponse(response, '', `wrong ${this.entityName}_id param type`);
    }

    const data: Service = this.improver.createT({
      attendance_id: Number(attendance_id),
      ...request.body
    });

    return await this.execService(
      response,
      this.service.add,
      data
    );
  }

  @Put(':id')
  async update(@Req() request: Request, @Res() response: Response): Promise<Response> {
    if(!request.body) {
      return makeResponse(response, 'no-data', 'need body data');
    }

    const emptyFields = this.verifyFields(request.body);

    if(emptyFields.length === this.mFieldsLenght) {
      return makeResponse(response, 'bad-req', `one of ${emptyFields.join(', ')} fields are needed`);
    }

    const { attendance_id, id } = request.params;

    if(!id.length) {
      return makeResponse(response, '', `need ${this.entityName} id param`);
    }

    if(!attendance_id.length) {
      return makeResponse(response, '', `need attendance id param`);
    }

    try {
      Number(id);
      Number(attendance_id);
    } catch {
      return makeResponse(response, '', `wrong ${this.entityName}_id param type`);
    }

    const data: Service = this.improver.createT({
      ...request.body,
    });

    data.attendance_id = Number(attendance_id);
    data.id = Number(id);

    return await this.execService(
      response,
      this.service.update,
      data
    );
  }

  @Delete(':id')
  async delete(@Req() request: Request, @Res() response: Response): Promise<Response> {
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

export default ServicesHandler;
