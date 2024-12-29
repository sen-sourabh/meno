import { Injectable } from '@nestjs/common';
import { MessageDto } from './dto/message.dto';
import { NotificationDto } from './dto/notification.dto';
import { MessageModel } from './model/message.model';
import { NotificationModel } from './model/notification.model';

@Injectable()
export class MenoService {
  async sendMessage(payload: MessageDto): Promise<MessageModel> {
    return {
      ...payload,
      body: {
        ...payload.body,
      },
    };
  }

  async sendNotification(payload: NotificationDto): Promise<NotificationModel> {
    return {
      ...payload,
      data: {
        ...payload.data,
      },
    };
  }
}
