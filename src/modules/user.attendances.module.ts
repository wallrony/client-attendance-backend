import { Module } from "@nestjs/common";
import UserAttendancesHandler from "src/handlers/UserAttendancesHandler";
import UserAttendancesService from "src/services/UserAttendancesService";

@Module({
  controllers: [UserAttendancesHandler],
  providers: [UserAttendancesService]
})
export class UserAttendancesModule {}
