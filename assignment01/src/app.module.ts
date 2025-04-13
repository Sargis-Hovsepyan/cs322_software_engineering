import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppDataSource } from './data/data-source';
import { Message } from './data/entities/nuts-message.entity';
import { NatsSubscriber } from './api/nats.subscriber';
import { MessageService } from './service/message.service';
import { MessageRepository } from './data/message.repository';

@Module({
  imports: [
    TypeOrmModule.forRoot(AppDataSource.options),
    TypeOrmModule.forFeature([Message]),
  ],
  providers: [MessageService, MessageRepository],
  controllers: [NatsSubscriber],
})
export class AppModule {}
