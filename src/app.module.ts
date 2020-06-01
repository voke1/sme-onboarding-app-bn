import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './users/users.controller';
import { SmesController } from './smes/smes.controller';

@Module({
  imports: [],
  controllers: [AppController, UserController, SmesController],
  providers: [AppService],
})
export class AppModule {}
