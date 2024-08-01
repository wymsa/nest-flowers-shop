import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { UsersModule } from './users/users.module';
import { configModuleOptions, typeOrmModuleAsyncOptions } from './config';
import { TypeOrmModule } from '@nestjs/typeorm';
import type { TEnvConfig } from './types';

@Module({
  imports: [
    ConfigModule.forRoot(configModuleOptions),
    TypeOrmModule.forRootAsync(typeOrmModuleAsyncOptions),
    UsersModule,
  ],
})
export class AppModule {}
