import { PickType } from '@nestjs/swagger';
import { MessageModel } from '../model/message.model';

export class MessageDto extends PickType(MessageModel, ['title', 'body']) {}
