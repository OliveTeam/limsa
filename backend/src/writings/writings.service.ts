import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { WritingDocument } from './interfaces/writing-document.interface';
import { CreateWritingDto } from './dto/create-writing.dto';
import { timingSafeEqual } from 'crypto';

@Injectable()
export class WritingsService {
    constructor(@InjectModel('Writing') private readonly writingModel: Model<WritingDocument>) { }

    async create(createWritingDto: CreateWritingDto): Promise<WritingDocument> { 
        const createdWriting = new this.writingModel(createWritingDto);
        return createdWriting.save();
    }

    async findAll(): Promise<WritingDocument[]> {
        return this.writingModel.find().exec();
    }
}
