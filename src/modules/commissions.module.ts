import { Module } from "@nestjs/common";
import CommissionsHandler from "src/handlers/CommissionsHandler";
import CommissionsService from "src/services/CommissionsService";

@Module({
  controllers: [CommissionsHandler],
  providers: [CommissionsService]
})
export class CommissionsModule {}
