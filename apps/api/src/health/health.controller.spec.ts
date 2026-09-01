import { describe, it, expect, beforeEach, vi } from 'vitest';
import { Test, TestingModule } from '@nestjs/testing';
import { HealthController } from './health.controller.js';
import { HealthService } from './health.service.js';
import type { HealthStatus } from '@repo/contracts';

vi.mock('@repo/database', () => ({
  PrismaClient: class PrismaClient {},
  prisma: {},
}));

describe('HealthController', () => {
  let controller: HealthController;
  let mockHealthService: { check: ReturnType<typeof vi.fn> };

  beforeEach(async () => {
    mockHealthService = {
      check: vi.fn(),
    };

    const module: TestingModule = await Test.createTestingModule({
      controllers: [HealthController],
      providers: [
        {
          provide: HealthService,
          useValue: mockHealthService,
        },
      ],
    }).compile();

    controller = module.get<HealthController>(HealthController);
  });

  it('should delegate the call to HealthService and return the status', async () => {
    const expectedResponse: HealthStatus = {
      status: 'ok',
      db: 'connected',
    };

    mockHealthService.check.mockResolvedValueOnce(expectedResponse);

    const result = await controller.check();

    expect(mockHealthService.check).toHaveBeenCalledTimes(1);
    expect(result).toEqual(expectedResponse);
  });
});
