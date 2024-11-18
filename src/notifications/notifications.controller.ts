import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { NotificationsService } from './notifications.service';
import { SendNotificationDto } from './dto/send-notification.dto';
import { RateLimit } from '../common/decorators/rate-limit.decorator';

@Controller('api/notifications')
export class NotificationsController {
  constructor(private readonly notificationsService: NotificationsService) {}

  @Post('send')
  @RateLimit(10, 60)
  sendNotification(@Body() sendNotificationDto: SendNotificationDto) {
    return this.notificationsService.sendNotification(sendNotificationDto);
  }

  @Get(':userId/logs')
  getUserLogs(@Param('userId') userId: string) {
    return this.notificationsService.getUserLogs(userId);
  }

  @Get('stats')
  getStats() {
    return this.notificationsService.getStats();
  }
}

export default function Component() {
  return null;
}