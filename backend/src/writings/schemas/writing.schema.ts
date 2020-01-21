import { Schema } from 'mongoose';

export const WritingSchema = new Schema({
    author: Schema.Types.String,
    publicationDate: Schema.Types.Date,
    title: Schema.Types.String,
    id: Schema.Types.ObjectId,
});
