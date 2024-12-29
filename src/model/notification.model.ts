import {
  IsNotEmpty,
  IsObject,
  IsString,
  ValidateNested,
} from 'class-validator';

export class NotificationModel {
  @IsNotEmpty()
  @IsString({ message: 'Title is required' })
  title: string;

  @IsNotEmpty()
  @IsObject({ message: 'Data is required' })
  @ValidateNested({ each: true })
  data: { name: string };
}
