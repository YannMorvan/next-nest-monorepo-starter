import { Injectable } from '@nestjs/common';
import type { HealthStatus } from '@repo/contracts';
import { PrismaService } from '../prisma/prisma.service.js';

@Injectable()
export class HealthService {
  constructor(private readonly prisma: PrismaService) {}

  async check(): Promise<HealthStatus> {
    await this.prisma.$queryRaw`SELECT 1`;

    return {
      status: 'ok',
      db: 'connected',
    };
  }
}
