import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { UserPreferencesModule } from './user-preferences/user-preferences.module';
import { NotificationsModule } from './notifications/notifications.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGODB_URI),
    UserPreferencesModule,
    NotificationsModule,
  ],
})
export class AppModule {}

export default function Component() {
  return null;
}