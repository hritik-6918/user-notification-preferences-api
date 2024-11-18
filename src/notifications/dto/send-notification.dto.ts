import { IsString, IsEnum, IsObject } from 'class-validator';

export class SendNotificationDto {
  @IsString()
  userId: string;

  @IsEnum(['marketing', 'newsletter', 'updates'])
  type: 'marketing' | 'newsletter' | 'updates';

  @IsEnum(['email', 'sms', 'push'])
  channel: 'email' | 'sms' | 'push';

  @IsObject()
  metadata: Record<string, any>;
}

export default function Component() {
  return null;
}