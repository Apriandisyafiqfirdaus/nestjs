import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LatihanController } from './latihan/latihan.controller';
import { LatihanService } from './latihan/latihan.service';
import { TaskModule } from './task/task.module';

@Module({
  imports: [TaskModule],
  controllers: [AppController, LatihanController],
  providers: [AppService, LatihanService],
})
export class AppModule {}
