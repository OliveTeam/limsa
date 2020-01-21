import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { WritingsService } from './writings.service';
import { WritingSchema } from './schemas/writing.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Writing', schema: WritingSchema }])],
  controllers: [],
  providers: [WritingsService],
})
export class WritingsModule {}
