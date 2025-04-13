import 'dotenv/config';
import { DataSource } from 'typeorm';
import { Message } from './entities/nuts-message.entity';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  entities: [Message],
  synchronize: true, // False for Prod
});