import { Request, Response } from 'express';

import Handler from "./Handler";
import User from "../core/models/User";
import UsersService from "../services/UsersService";
import { makeResponse } from "../core/utils/ResponseUtils";
import { Controller, Get, Put, Req, Res } from '@nestjs/common';

@Controller('/api/accounts/users')
class UsersHandler extends Handler<UsersService, User> {
  constructor() {
    super(
      'user',
      new UsersService(),
      ['name', 'email', 'password', 'birthday'],
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
      Number(id),
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

    data.id = id;

    return await this.execService(
      response,
      this.service.update,
      data,
    );
  }
}

export default UsersHandler;
