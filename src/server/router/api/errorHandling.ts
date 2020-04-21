import { Router, Request, Response, NextFunction } from 'express';

const router = Router();

router.get(
  '/throw404Error',
  (_req: Request, _res: Response, _next: NextFunction) => {
    return _res.status(200).json({ message: 'Throw 404 Error' });
  }
);

router.get(
  '/maintenance',
  (_req: Request, _res: Response, _next: NextFunction) => {
    // return _res.status(503).json({ message: 'Maintenance' });
    return _res.status(503).render('/error/503.html');
  }
);

export default router;
