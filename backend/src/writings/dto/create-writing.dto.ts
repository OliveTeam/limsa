import { IsNotEmpty } from 'class-validator';

export class CreateWritingDto {
    @IsNotEmpty()
    readonly author: string;

    @IsNotEmpty()
    readonly publicationDate: Date;

    @IsNotEmpty()
    readonly title: string;
}