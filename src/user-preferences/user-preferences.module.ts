import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserPreferencesController } from './user-preferences.controller';
import { UserPreferencesService } from './user-preferences.service';
import { UserPreference, UserPreferenceSchema } from './schemas/user-preference.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: UserPreference.name, schema: UserPreferenceSchema }]),
  ],
  controllers: [UserPreferencesController],
  providers: [UserPreferencesService],
  exports: [UserPreferencesService],
})
export class UserPreferencesModule {}

export default function Component() {
  return null;
}
