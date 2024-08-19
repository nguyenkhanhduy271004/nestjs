import { Body, Controller, Get, Param, ParseIntPipe, Post, UsePipes, ValidationPipe } from "@nestjs/common";
import { plainToClass } from "class-transformer";
import { UserDto } from "src/User.dto";

@Controller('users')
export class UserController {
    @Get()
    getAllUsers() {
        return [
            {
                name: 'Duy',
                age: 12
            }, {
                name: 'Kiet',
                age: 10
            }
        ]
    }

    // @UsePipes(new ValidationPipe())
    @Post()
    createUser(@Body() user: UserDto) {
        user.id = '2';
        user.createdAt = new Date();
        user.updatedAt = new Date();

        return UserDto.plainToClass(user)
    }

    @Get(':id')
    getUserById(@Param('id', ParseIntPipe) id: number) {
        return id.toString();
    }

}