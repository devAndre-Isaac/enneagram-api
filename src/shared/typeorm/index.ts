import { DataSource } from 'typeorm';
import dotenv from 'dotenv';

dotenv.config();

export const dataSource = new DataSource({
  name: 'postgres',
  type: 'postgres',
  url: process.env.DB_URL,
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  entities: ['./dist/modules/**/entities/*{.ts,.js}'],
  synchronize: false,
  migrationsTableName: 'migrations',
  migrations: ['./dist/config/database/migrations/*.ts'],
});
