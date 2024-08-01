import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import type { TEnvConfig } from '../types';

@Injectable()
export class UsersService {
  constructor(private readonly configService: ConfigService<TEnvConfig>) {}

  hello(): string {
    return `Hello ${this.configService.getOrThrow('DB_USERNAME')}`;
  }
}
