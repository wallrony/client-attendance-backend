import { Request, Response } from 'express';

import Handler from "./Handler";
import User from "../core/models/User";
import UserService from "../services/UserService";
import { makeResponse } from "../core/utils/ResponseUtils";

class UsersHandler extends Handler<UserService, User> {
  constructor() {
    super(
      'user',
      new UserService(),
      ['name', 'email', 'password', 'birthday'],
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
      Number(id),
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
}

export default UsersHandler;
