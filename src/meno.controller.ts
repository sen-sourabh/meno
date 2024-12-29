import {
  Body,
  Controller,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { MessageDto } from './dto/message.dto';
import { NotificationDto } from './dto/notification.dto';
import { MenoService } from './meno.service';
import { MessageModel } from './model/message.model';
import { NotificationModel } from './model/notification.model';

@Controller()
export class MenoController {
  constructor(private readonly menoService: MenoService) {}

  @UsePipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
    }),
  )
  @Post('/message')
  sendMessage(@Body() body: MessageDto): Promise<MessageModel> {
    return this.menoService.sendMessage(body);
  }

  @UsePipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
    }),
  )
  @Post('/notification')
  sendNotification(@Body() body: NotificationDto): Promise<NotificationModel> {
    return this.menoService.sendNotification(body);
  }
}
