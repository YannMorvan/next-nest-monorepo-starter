import { Controller, Get } from '@nestjs/common';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiProperty,
} from '@nestjs/swagger';
import { AppService } from './app.service.js';

export class AppHelloResponseDto {
  @ApiProperty({ example: 'Hello World!' })
  message!: string;

  @ApiProperty({ example: '2026-09-01T10:00:00.000Z' })
  timestamp!: string;
}

@ApiTags('Root')
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @ApiOperation({ summary: 'API root welcome endpoint' })
  @ApiResponse({
    status: 200,
    description: 'Returns API greeting message and timestamp',
    type: AppHelloResponseDto,
  })
  getHello(): AppHelloResponseDto {
    return {
      message: this.appService.getHello(),
      timestamp: new Date().toISOString(),
    };
  }
}
