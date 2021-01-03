import { Controller, Post, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';

import Handler from './Handler';
import Doctor from '../core/models/Doctor';
import AuthCredentials from '../core/models/AuthCredentials';
import DoctorAuthService from '../services/DoctorAuthService';
import { makeResponse } from '../core/utils/ResponseUtils';

@Controller('api/accounts')
class DoctorAuthHandler extends Handler<DoctorAuthService, Doctor> {
  constructor() {
    super(
      'doctor',
      new DoctorAuthService(),
      ['name', 'email', 'password', 'birthday', 'crm', 'attendance_id'],
    );
  }

  @Post('login-doctor')
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

  @Post('register-doctor')
  async register(@Req() request: Request, @Res() response: Response): Promise<Response> {
    if(!request.body) {
      return makeResponse(response, 'no-data', 'need body data');
    }
    
    const emptyFields = this.verifyFields(request.body);

    if(emptyFields.length) {
      return makeResponse(response, 'bad-req', `${emptyFields.join(', ')} fields are missing`);
    }

    const data: Doctor = this.improver.createT({ ...request.body });

    return await this.execService(
      response,
      this.service.register,
      data
    );
  }
}

export default DoctorAuthHandler;
