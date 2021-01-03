import { Module } from "@nestjs/common";
import AttendancesHandler from "src/handlers/AttendancesHandler";
import AttendancesService from "src/services/AttendancesService";

@Module({
  controllers: [AttendancesHandler],
  providers: [AttendancesService]
})
export class AttendancesModule {}
