import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { MessageService } from '../service/message.service';

@Controller()
export class MessageController {
  constructor(private readonly messageService: MessageService) {}

  @MessagePattern('nats_message_channel')
  async handleMessage(data: any) {
    console.log('Received message:', data);

    /* Optional Validation code can be here */

    await this.messageService.processMessage(data);
  }
}
