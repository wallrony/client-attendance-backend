import { NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import FreePath from 'src/core/models/FreePath';
export declare class AuthMiddleware implements NestMiddleware {
    freePaths: FreePath[];
    use(request: Request, response: Response, next: NextFunction): Promise<void | Response<any>>;
}
