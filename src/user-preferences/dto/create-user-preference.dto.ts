import { IsString, IsEmail, IsObject, IsBoolean, IsEnum, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

class ChannelsDto {
  @IsBoolean()
  email: boolean;

  @IsBoolean()
  sms: boolean;

  @IsBoolean()
  push: boolean;
}

class PreferencesDto {
  @IsBoolean()
  marketing: boolean;

  @IsBoolean()
  newsletter: boolean;

  @IsBoolean()
  updates: boolean;

  @IsEnum(['daily', 'weekly', 'monthly', 'never'])
  frequency: 'daily' | 'weekly' | 'monthly' | 'never';

  @ValidateNested()
  @Type(() => ChannelsDto)
  channels: ChannelsDto;
}

export class CreateUserPreferenceDto {
  @IsString()
  userId: string;

  @IsEmail()
  email: string;

  @ValidateNested()
  @Type(() => PreferencesDto)
  preferences: PreferencesDto;

  @IsString()
  timezone: string;
}

export default function Component() {
  return null;
}