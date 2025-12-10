import { Module } from "@nestjs/common";
import { Bcrypt } from "./bcrypt/bcrypt";

@Module({
  imports: [],
  providers: [Bcrypt],
  exports: [Bcrypt],
  controllers: [],
})
export class AuthModule {}