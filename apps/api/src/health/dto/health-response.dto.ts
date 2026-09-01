import type { HealthStatus } from '@repo/contracts';

export class HealthResponseDto implements HealthStatus {
  status!: 'ok';
  db!: 'connected';
}
