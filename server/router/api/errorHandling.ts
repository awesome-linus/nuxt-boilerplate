import { Router, Request, Response, NextFunction } from 'express';

const router = Router();

/**
 * http://localhost:3000/api/throw404Error
 */
router.get(
  '/throw404Error',
  (_req: Request, _res: Response, _next: NextFunction) => {
    return _res.status(200).json({ message: 'Throw 404 Error' });
  }
);

export default router;
