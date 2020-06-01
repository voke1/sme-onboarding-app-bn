import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersController } from './users/users.controller';
import { SmesController } from './smes/smes.controller';

@Module({
  imports: [],
  controllers: [AppController, UsersController, SmesController],
  providers: [AppService],
})
export class AppModule {}
