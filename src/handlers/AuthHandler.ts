import { Request, Response } from 'express';

import User from '../core/models/User';
import AuthService from '../services/AuthService';
import Handler from './Handler';
import { makeResponse } from '../core/utils/ResponseUtils';
import AuthCredentials from '../core/models/AuthCredentials';
import { Controller, Get, Post, Req, Res } from '@nestjs/common';

@Controller('/api/accounts')
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

  @Post('/login')
  async login(@Req() request: Request, @Res() response: Response): Promise<Response> {
    if(!request.body) {
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

  @Post('/register')
  async register(@Req() request: Request, @Res() response: Response): Promise<Response> {
    if(!request.body) {
      return makeResponse(response, 'no-data', 'need body data');
    }
    
    const emptyFields = this.verifyFields(request.body);

    if(emptyFields.length) {
      return makeResponse(response, 'bad-req', `${emptyFields.join(', ')} fields are missing`);
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
