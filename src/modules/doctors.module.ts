import { Module } from "@nestjs/common";
import DoctorsHandler from "src/handlers/DoctorsHandler";
import DoctorsService from "src/services/DoctorsService";

@Module({
  controllers: [DoctorsHandler],
  providers: [DoctorsService]
})
export class DoctorsModule {}
