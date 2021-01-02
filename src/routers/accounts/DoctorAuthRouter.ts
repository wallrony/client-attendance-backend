import { IRouter } from "express";

import Router from "../Router";
import DoctorAuthHandler from "../../handlers/DoctorAuthHandler";

class DoctorAuthRouter extends Router<DoctorAuthHandler> {
  constructor() {
    super(new DoctorAuthHandler());
  }

  setRoutes(router: IRouter) {
    router.post('/login-doctor', this.handler.login);
    router.post('/register-doctor', this.handler.register);
  }
}

export default DoctorAuthRouter;
