import { Module } from "@nestjs/common";
import ServicesHandler from "src/handlers/ServicesHandler";
import ServicesService from "src/services/ServicesService";

@Module({
  controllers: [ServicesHandler],
  providers: [ServicesService]
})
export class ServicesModule {}
