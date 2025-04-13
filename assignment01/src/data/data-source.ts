import { DataSource } from 'typeorm';
import { Message } from './entities/nuts-message.entity';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'username',
  password: 'password',
  database: 'valhalla',
  entities: [Message],
  synchronize: true, // false for prod
});
