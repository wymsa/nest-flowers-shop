import { ConfigModuleOptions, ConfigService } from '@nestjs/config';
import { TypeOrmModuleAsyncOptions } from '@nestjs/typeorm';
import type { TEnvConfig } from '../types';

export const configModuleOptions: ConfigModuleOptions = {
  isGlobal: true,
};

export const typeOrmModuleAsyncOptions: TypeOrmModuleAsyncOptions = {
  useFactory: (configService: ConfigService<TEnvConfig>) => ({
    type: 'postgres',
    host: configService.getOrThrow('DB_HOST'),
    port: configService.getOrThrow('DB_PORT'),
    username: configService.getOrThrow('DB_USERNAME'),
    password: configService.getOrThrow('DB_PASSWORD'),
    database: configService.getOrThrow('DB_NAME'),
    autoLoadEntities: true,
    synchronize: false,
  }),
  inject: [ConfigService],
};
