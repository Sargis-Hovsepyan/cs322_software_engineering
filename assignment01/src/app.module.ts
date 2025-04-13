import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppDataSource } from './data/data-source';
import { Message } from './data/entities/message.entity';
import { MessageController } from './api/message.controller';
import { MessageService } from './service/message.service';
import { MessageRepository } from './data/message.repository';

@Module({
  imports: [
    TypeOrmModule.forRoot(AppDataSource.options),
    TypeOrmModule.forFeature([Message]),
  ],
  providers: [MessageService, MessageRepository],
  controllers: [MessageController],
})
export class AppModule {}
