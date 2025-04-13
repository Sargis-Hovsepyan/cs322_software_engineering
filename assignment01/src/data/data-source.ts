import 'dotenv/config';
import { DataSource } from 'typeorm';
import { Message } from './entities/nuts-message.entity';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST || 'localhost',
  port: Number(process.env.DB_PORT) || 5432,
  username: process.env.DB_USERNAME || 'username',
  password: process.env.DB_PASSWORD || 'password',
  database: process.env.DB_DATABASE || 'valhalla',
  entities: [Message],
  synchronize: true, // False for Prod
});
