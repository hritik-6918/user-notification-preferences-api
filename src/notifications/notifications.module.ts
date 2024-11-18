import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { NotificationsController } from './notifications.controller';
import { NotificationsService } from './notifications.service';
import { NotificationLog, NotificationLogSchema } from './schemas/notification-log.schema';
import { UserPreferencesModule } from '../user-preferences/user-preferences.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: NotificationLog.name, schema: NotificationLogSchema }]),
    UserPreferencesModule,
  ],
  controllers: [NotificationsController],
  providers: [NotificationsService],
})
export class NotificationsModule {}

export default function Component() {
  return null;
}