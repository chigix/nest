import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TestModule } from './test/test.module';
import { DbimplModule } from './dbimpl/dbimpl.module';

@Module({
  imports: [TestModule, DbimplModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
