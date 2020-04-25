import { Router, Request, Response, NextFunction } from 'express';

const router = Router();

/**
 * http://localhost:3000/api/healthcheck
 */
router.get(
  '/healthcheck',
  (_req: Request, _res: Response, _next: NextFunction) => {
    return _res.status(200).send('healthcheck ok');
  }
);

export default router;
