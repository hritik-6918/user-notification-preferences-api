import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UserPreferencesService } from './user-preferences.service';
import { CreateUserPreferenceDto } from './dto/create-user-preference.dto';
import { UpdateUserPreferenceDto } from './dto/update-user-preference.dto';
import { RateLimit } from '../common/decorators/rate-limit.decorator';

@Controller('api/preferences')
export class UserPreferencesController {
  constructor(private readonly userPreferencesService: UserPreferencesService) {}

  @Post()
  @RateLimit(5, 60)
  create(@Body() createUserPreferenceDto: CreateUserPreferenceDto) {
    return this.userPreferencesService.create(createUserPreferenceDto);
  }

  @Get(':userId')
  findOne(@Param('userId') userId: string) {
    return this.userPreferencesService.findOne(userId);
  }

  @Patch(':userId')
  @RateLimit(5, 60)
  update(@Param('userId') userId: string, @Body() updateUserPreferenceDto: UpdateUserPreferenceDto) {
    return this.userPreferencesService.update(userId, updateUserPreferenceDto);
  }

  @Delete(':userId')
  remove(@Param('userId') userId: string) {
    return this.userPreferencesService.remove(userId);
  }
}

export default function Component() {
  return null;
}