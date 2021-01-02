import { Router } from 'express';

import AttendancesRouter from './AttendancesRouter';
import CommissionsRouter from './CommissionsRouter';
import ServicesRouter from './ServicesRouter';
import UserAttendancesRouter from './UserAttendancesRouter';

export function setRoutes(router: Router) {
  const coreRouter = router.use('/core');

  const attendanceRouter = new AttendancesRouter();
  const commissionsRouter = new CommissionsRouter();
  const servicesRouter = new ServicesRouter();
  const userAttendancesRouter = new UserAttendancesRouter();

  attendanceRouter.setRoutes(coreRouter);
  commissionsRouter.setRoutes(coreRouter);
  servicesRouter.setRoutes(coreRouter);
  userAttendancesRouter.setRoutes(coreRouter);
}
