import { Request, Response } from 'express';
import AuthCredentials from '../core/models/AuthCredentials';
import Doctor from '../core/models/Doctor';
import { makeResponse } from '../core/utils/ResponseUtils';
import DoctorAuthService from '../services/DoctorAuthService';
import Handler from './Handler';

class DoctorAuthHandler extends Handler<DoctorAuthService, Doctor> {
  constructor() {
    super(
      'doctor',
      new DoctorAuthService(),
      ['name', 'email', 'password', 'birthday', 'crm', 'attendance_id'],
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

    const data: AuthCredentials = { ...request.body }

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
      return makeResponse(response, 'bad-req');
    }

    const data: Doctor = { ...request.body };

    return await this.execService(
      response,
      this.service.register,
      data
    );
  }
}

export default DoctorAuthHandler;
