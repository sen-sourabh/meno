import { PickType } from '@nestjs/swagger';
import { NotificationModel } from '../model/notification.model';

export class NotificationDto extends PickType(NotificationModel, [
  'title',
  'data',
]) {}
