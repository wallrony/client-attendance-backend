import { Module } from "@nestjs/common";
import UsersHandler from "src/handlers/UsersHandler";
import UsersService from "src/services/UsersService";

@Module({
  controllers: [UsersHandler],
  providers: [UsersService]
})
export class UsersModule {}
