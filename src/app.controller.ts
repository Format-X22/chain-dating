import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
    constructor(private readonly appService: AppService) {}

    @Get()
    async getMain(): Promise<string> {
        // TODO -
        return;
    }

    @Get()
    async getDating(): Promise<string> {
        // TODO -
        return;
    }

    @Post()
    async postDating(): Promise<string> {
        // TODO -
        return;
    }

    @Get()
    async getLogin(): Promise<string> {
        // TODO -
        return;
    }

    @Post()
    async postLogin(): Promise<string> {
        // TODO -
        return;
    }

    @Get()
    async getOptions(): Promise<string> {
        // TODO -
        return;
    }

    @Post()
    async postOptions(): Promise<string> {
        // TODO -
        return;
    }

    @Get()
    async profile(): Promise<string> {
        // TODO -
        return;
    }

    @Get()
    async register(): Promise<string> {
        // TODO -
        return;
    }

    @Post()
    async postRegister(): Promise<string> {
        // TODO -
        return;
    }

    @Get()
    async trade(): Promise<string> {
        // TODO -
        return;
    }
}
