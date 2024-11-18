import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { NotificationLog } from './schemas/notification-log.schema';
import { SendNotificationDto } from './dto/send-notification.dto';
import { UserPreferencesService } from '../user-preferences/user-preferences.service';

@Injectable()
export class NotificationsService {
  constructor(
    @InjectModel(NotificationLog.name) private notificationLogModel: Model<NotificationLog>,
    private userPreferencesService: UserPreferencesService,
  ) {}

  async sendNotification(sendNotificationDto: SendNotificationDto): Promise<NotificationLog> {
    const { userId, type, channel, metadata } = sendNotificationDto;

    // Check user preferences
    const userPreference = await this.userPreferencesService.findOne(userId);
    if (!userPreference.preferences[type] || !userPreference.preferences.channels[channel]) {
      throw new NotFoundException(`User ${userId} has not opted in for ${type} notifications via ${channel}`);
    }

    // Simulate sending notification
    const notificationLog = new this.notificationLogModel({
      userId,
      type,
      channel,
      status: 'sent',
      sentAt: new Date(),
      metadata,
    });

    return notificationLog.save();
  }

  async getUserLogs(userId: string): Promise<NotificationLog[]> {
    return this.notificationLogModel.find({ userId }).sort({ sentAt: -1 }).exec();
  }

  async getStats(): Promise<any> {
    const totalNotifications = await this.notificationLogModel.countDocuments();
    const notificationsByType = await this.notificationLogModel.aggregate([
      { $group: { _id: '$type', count: { $sum: 1 } } },
    ]);
    const notificationsByChannel = await this.notificationLogModel.aggregate([
      { $group: { _id: '$channel', count: { $sum: 1 } } },
    ]);

    return {
      totalNotifications,
      notificationsByType,
      notificationsByChannel,
    };
  }
}

export default function Component() {
  return null;
}