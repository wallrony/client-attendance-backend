import { Request, Response } from 'express';

import User from '../core/models/User';
import AuthService from '../services/AuthService';
import Handler from './Handler';
import { makeResponse } from '../core/utils/ResponseUtils';
import AuthCredentials from '../core/models/AuthCredentials';

class AuthHandler extends Handler<AuthService, User> {
  constructor() {
    super(
      'user',
      new AuthService(),
      [
        'name',
        'email',
        'password',
        'birthday',
      ]
    );
  }

  async login(request: Request, response: Response): Promise<Response> {
    if(!request.body.length) {
      return makeResponse(response, 'no-data', 'need body data');
    }
    
    const { email, password } = request.body;

    if(!email.length) {
      return makeResponse(response, 'bad-req', 'email field is missing');
    } else if(!password.length) {
      return makeResponse(response, 'bad-req', 'password field is missing');
    }

    const data: AuthCredentials = { email, password };

    return await this.execService(
      response,
      this.service.login,
      data
    );
  }

  async register(request: Request, response: Response): Promise<Response> {
    if(!request.body.length) {
      return makeResponse(response, 'no-data', 'need body data');
    }
    
    const emptyFields = this.verifyFields(request.body);

    if(emptyFields.length === this.mFieldsLenght) {
      return makeResponse(response, 'no-data', 'need data in request body')
    } else if(emptyFields.length) {
      return makeResponse(response, 'bad-req')
    }

    const data: User = { ...request.body };

    return await this.execService(
      response,
      this.service.register,
      data
    );
  }
}

export default AuthHandler;
