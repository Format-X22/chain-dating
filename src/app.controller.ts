import { Controller, Get, Res } from '@nestjs/common';
import { Response } from 'express';
import { AppService } from './app.service';

type TPageOptions = {
    isMainPage: boolean;
    isDatingPage: boolean;
    isSignInPage: boolean;
    isSignOutPage: boolean;
    isOptionsPage: boolean;
    isRegisterPage: boolean;
    isTradePage: boolean;
};

@Controller()
export class AppController {
    constructor(private readonly appService: AppService) {}

    @Get()
    async getMain(@Res() res: Response): Promise<void> {
        res.render('main', { isMainPage: true } as TPageOptions);
    }

    @Get('dating')
    async getDating(@Res() res: Response): Promise<void> {
        res.render('dating', { isDatingPage: true } as TPageOptions);
    }

    @Get('sign-in')
    async getSignIn(@Res() res: Response): Promise<void> {
        res.render('sign-in', { isSignInPage: true } as TPageOptions);
    }

    @Get('sign-out')
    async getSignOut(@Res() res: Response): Promise<void> {
        res.render('sign-out', { isSignOutPage: true } as TPageOptions);
    }

    @Get('options')
    async getOptions(@Res() res: Response): Promise<void> {
        res.render('options', { isOptionsPage: true } as TPageOptions);
    }

    @Get('register')
    async register(@Res() res: Response): Promise<void> {
        res.render('register', { isRegisterPage: true } as TPageOptions);
    }

    @Get('trade')
    async trade(@Res() res: Response): Promise<void> {
        res.render('trade', { isTradePage: true } as TPageOptions);
    }
}
