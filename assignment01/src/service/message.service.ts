import { Injectable } from '@nestjs/common';
import { MessageRepository } from '../data/message.repository';

@Injectable()
export class MessageService {
  constructor(private readonly messageRepo: MessageRepository) {}

  async processMessage(message: any) {
    if (!message.content) {
      console.warn('Invalid message: no content');
      return;
    }

    await this.messageRepo.saveMessage(message.sender, message.content);
    console.warn('Message is saved in the DB!');
  }
}
