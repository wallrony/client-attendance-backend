import { Router } from 'express';

import AuthRouter from './AuthRouter';
import DoctorAuthRouter from './DoctorAuthRouter';
import DoctorsRouter from './DoctorsHandler';
import UsersRouter from './UsersRouter';

class AccountsRouter {
  static setHandlers() {
    const group = Router();
  
    const authRouter = new AuthRouter(group);
    const doctorAuthRouter = new DoctorAuthRouter(group);
    const usersRouter = new UsersRouter(group);
    const doctorsRouter = new DoctorsRouter(group);
  
    authRouter.setRoutes();
    doctorAuthRouter.setRoutes();
    usersRouter.setRoutes();
    doctorsRouter.setRoutes();
  
    return group;
  }
}

export default AccountsRouter;
