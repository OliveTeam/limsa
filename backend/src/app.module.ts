import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { WritingsModule } from './writings/writings.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost/nest'), WritingsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
