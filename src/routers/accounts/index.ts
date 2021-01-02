import { Router } from 'express';

import AuthRouter from './AuthRouter';
import DoctorAuthRouter from './DoctorAuthRouter';
import DoctorsRouter from './DoctorsHandler';
import UsersRouter from './UsersRouter';

export function setHandlers(router: Router) {
  const accountsRouter = router.use('/accounts');

  const authRouter = new AuthRouter();
  const doctorAuthRouter = new DoctorAuthRouter();
  const usersRouter = new UsersRouter();
  const doctorsRouter = new DoctorsRouter();

  authRouter.setRoutes(accountsRouter);
  doctorAuthRouter.setRoutes(accountsRouter);
  usersRouter.setRoutes(accountsRouter);
  doctorsRouter.setRoutes(accountsRouter);
}
