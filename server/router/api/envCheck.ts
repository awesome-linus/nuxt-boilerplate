import { Router, Request, Response, NextFunction } from 'express';
import env from '../../config';

const router = Router();

/**
 * http://localhost:3000/api/env/anySecretKey
 */
router.get(
  '/env/anySecretKey',
  (_req: Request, _res: Response, _next: NextFunction) => {
    // Environment Variables For Server Side(BFF)
    return _res.status(200).send(env.anySecretKey);
  }
);

/**
 * http://localhost:3000/api/env/commonKey
 */
router.get(
  '/env/commonKey',
  (_req: Request, _res: Response, _next: NextFunction) => {
    // Environment Variables For Server Side(BFF)
    return _res.status(200).send(env.commonKey);
  }
);

export default router;
