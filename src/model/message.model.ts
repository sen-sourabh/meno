import {
  IsNotEmpty,
  IsObject,
  IsString,
  ValidateNested,
} from 'class-validator';

export class MessageModel {
  @IsNotEmpty()
  @IsString({ message: 'Title is required' })
  title: string;

  @IsObject({ message: 'Body is required' })
  @ValidateNested({ each: true })
  body: { name: string };
}
