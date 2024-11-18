import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class UserPreference extends Document {
  @Prop({ required: true })
  userId: string;

  @Prop({ required: true })
  email: string;

  @Prop({ type: Object, required: true })
  preferences: {
    marketing: boolean;
    newsletter: boolean;
    updates: boolean;
    frequency: 'daily' | 'weekly' | 'monthly' | 'never';
    channels: {
      email: boolean;
      sms: boolean;
      push: boolean;
    };
  };

  @Prop({ required: true })
  timezone: string;

  @Prop({ default: Date.now })
  lastUpdated: Date;

  @Prop({ default: Date.now })
  createdAt: Date;
}

export const UserPreferenceSchema = SchemaFactory.createForClass(UserPreference);

export default function Component() {
  return null;
}