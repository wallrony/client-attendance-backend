import { Module } from "@nestjs/common";
import { AttendancesModule } from "src/modules/attendances.module";
import { AuthModule } from "src/modules/auth.module";
import { CommissionsModule } from "src/modules/commissions.module";
import { DoctorAuthModule } from "src/modules/doctor.auth.module";
import { DoctorsModule } from "src/modules/doctors.module";
import { ServicesModule } from "src/modules/services.module";
import { UserAttendancesModule } from "src/modules/user.attendances.module";
import { UsersModule } from "src/modules/users.module";

@Module({
  imports: [
    AttendancesModule,
    AuthModule,
    CommissionsModule,
    DoctorAuthModule,
    DoctorsModule,
    ServicesModule,
    UserAttendancesModule,
    UsersModule,
  ],
})

export class AppModule {}