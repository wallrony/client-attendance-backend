import { Router } from 'express';

import AttendancesRouter from './AttendancesRouter';
import CommissionsRouter from './CommissionsRouter';
import ServicesRouter from './ServicesRouter';
import UserAttendancesRouter from './UserAttendancesRouter';

class CoreRouter {
  static setHandlers() {
    const group = Router();
  
    const attendanceRouter = new AttendancesRouter(group);
    const commissionsRouter = new CommissionsRouter(group);
    const servicesRouter = new ServicesRouter(group);
    const userAttendancesRouter = new UserAttendancesRouter(group);
  
    attendanceRouter.setRoutes();
    commissionsRouter.setRoutes();
    servicesRouter.setRoutes();
    userAttendancesRouter.setRoutes();
  
    return group;
  }
}

export default CoreRouter;
