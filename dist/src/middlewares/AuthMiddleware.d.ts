import { NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
export declare class AuthMiddleware implements NestMiddleware {
    use(request: Request, response: Response, next: NextFunction): Promise<void | Response<any>>;
}
