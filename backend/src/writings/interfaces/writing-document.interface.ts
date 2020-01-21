import { Writing } from './writing.interface';
import { Document } from 'mongoose';

export interface WritingDocument extends Writing, Document {}
