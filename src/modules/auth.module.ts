import { Module } from "@nestjs/common";
import AuthHandler from "src/handlers/AuthHandler";
import AuthService from "src/services/AuthService";

@Module({
  controllers: [AuthHandler],
  providers: [AuthService]
})
export class AuthModule {}
