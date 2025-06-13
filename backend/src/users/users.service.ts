import { Injectable } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';


@Injectable()
export class UsersService {
    getUsers(): string {
        return 'Hello World!';
    }
}
