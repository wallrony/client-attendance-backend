import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import User from 'src/core/models/User';
import { makeResponse } from 'src/core/utils/ResponseUtils';
import { verifyToken } from 'src/core/utils/TokenUtils';
import { createConnection } from 'src/data/database/Connection';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  async use(request: Request, response: Response, next: NextFunction) {
    const authorization = request.headers['authorization'];

    if(!authorization || !authorization.length) {
      return makeResponse(response, '', 'need authorization token');
    }

    const authorizationSplit: string[] = authorization?.split(' ');

    if(authorizationSplit.length !== 2) {
      return makeResponse(response, '', 'wrong authorization header value');
    }

    const token = authorizationSplit[1];

    const result = verifyToken(token);

    if(typeof(result) === 'string') {
      return makeResponse(response, result, 'login again to get a valid token.');
    }

    const connection = createConnection();

    /* Verificando a existência do token no banco de
      * dados.
      */
    const user = await connection('users')
      .select('*')
      .where('id', '=', result)
      .first<User>();

    if(!user['id']) {
      return makeResponse(response, 'unauthorized-user', 'login again to get a valid token.');
    }

    /* Caso o token seja válido, continue para a
      * funcionalidade requisitada.
      */
    return next();
  }
}
