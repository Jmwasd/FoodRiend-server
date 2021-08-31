import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { FriendService } from './friend.service';
import { CreateFriendDto } from './dto/create-friend.dto';
import { UpdateFriendDto } from './dto/update-friend.dto';

@Controller('friend')
export class FriendController {
  constructor(private readonly friendService: FriendService) {}

  @Post('add/:id')
  create(@Param('id') id: string) {}

  @Get('list/:id')
  findAll(@Param('id') id: string) {}

  @Delete('delete/:id')
  remove(@Param('id') id: string) {}
}