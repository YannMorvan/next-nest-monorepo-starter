import { describe, it, expect, beforeEach } from 'vitest';
import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = module.get<AppController>(AppController);
  });

  describe('GET /', () => {
    it('should return welcome message and valid timestamp', () => {
      const result = appController.getHello();

      expect(result).toEqual({
        message: 'Hello World!',
        timestamp: expect.any(String),
      });
      expect(Number.isNaN(Date.parse(result.timestamp))).toBe(false);
    });
  });
});
