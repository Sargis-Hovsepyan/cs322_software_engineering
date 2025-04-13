import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Message } from './entities/message.entity';
import { Injectable } from '@nestjs/common';

@Injectable()
export class MessageRepository {
  constructor(
    @InjectRepository(Message)
    private readonly messageRepo: Repository<Message>,
  ) {}

  async saveMessage(sender: string, content: string) {
    const message = new Message();

    message.sender = sender;
    message.content = content;
    message.createdAt = new Date();

    await this.messageRepo.save(message);
  }
}
