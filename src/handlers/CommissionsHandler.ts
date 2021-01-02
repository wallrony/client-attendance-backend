import { Request, Response } from 'express';

import Handler from "./Handler";
import Commission from "../core/models/Commission";
import CommissionsService from "../services/CommissionsService";
import { makeResponse } from '../core/utils/ResponseUtils';

class CommissionsHandler extends Handler<CommissionsService, Commission> {
  constructor() {
    super(
      'commission',
      new CommissionsService(),
      ['doctor_id', 'client_attendance_id', 'value']
    );
  }

  async index(request: Request, response: Response): Promise<Response> {
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

  async add(request: Request, response: Response): Promise<Response> {
    const { doctor_id, client_attendance_id, value } = request.body;

    if(!doctor_id.length || !client_attendance_id.length) {
      return makeResponse(response, '', `need ${this.entityName} id param`);
    }

    try {
      Number(doctor_id);
      Number(client_attendance_id);
    } catch {
      return makeResponse(response, '', 'wrong attendance_id param type');
    }

    const data = this.improver.createT({
      doctor_id: Number(doctor_id),
      client_attendance_id: Number(client_attendance_id),
      value
    });

    return await this.execService(
      response,
      this.service.add,
      data
    );
  }
}

export default CommissionsHandler;
