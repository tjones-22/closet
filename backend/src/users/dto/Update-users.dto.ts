
import { PartialType } from '@nestjs/mapped-types';
import { CreateUsersDTO } from './Create-users.dto';

export class UpdateUserDto extends PartialType(CreateUsersDTO){
}