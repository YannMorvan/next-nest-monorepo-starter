import { Injectable } from '@nestjs/common';
import type { HealthStatus } from '@repo/contracts';

@Injectable()
export class HealthService {
  check(): HealthStatus {
    return {
      status: 'ok',
      uptime: process.uptime(),
      timestamp: new Date().toISOString(),
    };
  }
}
