import { ApiProperty } from '@nestjs/swagger';
import type { HealthStatus } from '@repo/contracts';

export class HealthResponseDto implements HealthStatus {
  @ApiProperty({ enum: ['ok', 'error'], example: 'ok' })
  status!: 'ok' | 'error';

  @ApiProperty({ example: 12.34 })
  uptime!: number;

  @ApiProperty({ example: '2026-09-01T10:00:00.000Z' })
  timestamp!: string;
}
