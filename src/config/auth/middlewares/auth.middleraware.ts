import { Request, Response } from 'express';
import { Secret, verify } from 'jsonwebtoken';
import AppError from '../../../shared/errors/AppError';
import authConfig from '../authConfig';

interface ITokenPayload {
  iat: number;
  exp: number;
  sub: string;
}

class AuthMiddleware {
  use(request: Request, response: Response, next: (error?: any) => void) {
    const authHeader = request.headers.authorization;
    if (!authHeader) {
      throw new AppError('JWT Token is missing');
    }

    const [, token] = authHeader.split(' ');

    try {
      const decodeToken = verify(token, authConfig.jwt.secret as Secret);

      const { sub } = decodeToken as ITokenPayload;

      request.user = {
        id: sub,
      };

      return next();
    } catch {
      throw new AppError('Invalid JWT Token');
    }
  }
}
export const authenticate = new AuthMiddleware().use;
