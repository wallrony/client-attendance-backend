import { Module } from "@nestjs/common";
import DoctorAuthHandler from "src/handlers/DoctorAuthHandler";
import DoctorAuthService from "src/services/DoctorAuthService";

@Module({
  controllers: [DoctorAuthHandler],
  providers: [DoctorAuthService]
})
export class DoctorAuthModule {}
