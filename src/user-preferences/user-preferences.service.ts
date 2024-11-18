import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserPreference } from './schemas/user-preference.schema';
import { CreateUserPreferenceDto } from './dto/create-user-preference.dto';
import { UpdateUserPreferenceDto } from './dto/update-user-preference.dto';

@Injectable()
export class UserPreferencesService {
  constructor(
    @InjectModel(UserPreference.name) private userPreferenceModel: Model<UserPreference>,
  ) {}

  async create(createUserPreferenceDto: CreateUserPreferenceDto): Promise<UserPreference> {
    const createdUserPreference = new this.userPreferenceModel(createUserPreferenceDto);
    return createdUserPreference.save();
  }

  async findOne(userId: string): Promise<UserPreference> {
    const userPreference = await this.userPreferenceModel.findOne({ userId }).exec();
    if (!userPreference) {
      throw new NotFoundException(`User preferences for user ${userId} not found`);
    }
    return userPreference;
  }

  async update(userId: string, updateUserPreferenceDto: UpdateUserPreferenceDto): Promise<UserPreference> {
    const updatedUserPreference = await this.userPreferenceModel
      .findOneAndUpdate({ userId }, updateUserPreferenceDto, { new: true })
      .exec();
    if (!updatedUserPreference) {
      throw new NotFoundException(`User preferences for user ${userId} not found`);
    }
    return updatedUserPreference;
  }

  async remove(userId: string): Promise<UserPreference> {
    const deletedUserPreference = await this.userPreferenceModel.findOneAndDelete({ userId }).exec();
    if (!deletedUserPreference) {
      throw new NotFoundException(`User preferences for user ${userId} not found`);
    }
    return deletedUserPreference;
  }
}

export default function Component() {
  return null;
}