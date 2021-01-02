import { IRouter } from "express";

import Router from "../Router";
import DoctorAuthHandler from "../../handlers/DoctorAuthHandler";

class DoctorAuthRouter extends Router<DoctorAuthHandler> {
  constructor(router: IRouter) {
    super('DoctorAuthRouter', new DoctorAuthHandler(), router);
  }

  setRoutes() {
    this.setRouteWithLog('POST', '/login-doctor', this.handler.login);
    this.setRouteWithLog('POST', '/register-doctor', this.handler.register);
  }
}

export default DoctorAuthRouter;
