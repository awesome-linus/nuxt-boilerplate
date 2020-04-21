import { Router, Request, Response, NextFunction } from 'express';

const router = Router();

router.get(
  '/404Error',
  (_req: Request, _res: Response, _next: NextFunction) => {
    return _res.status(404).json({ message: '404 Error Occurred' });
  }
);

router.get(
  '/500Error',
  (_req: Request, _res: Response, _next: NextFunction) => {
    return _res.status(500).json({ message: '500 Error Occurred' });
  }
);

router.get(
  '/throw404Error',
  (_req: Request, _res: Response, _next: NextFunction) => {
    return _res.status(200).json({ message: 'Throw 404 Error' });
  }
);

router.get(
  '/throw500Error',
  (_req: Request, _res: Response, _next: NextFunction) => {
    return _res.status(200).json({ message: 'Throw 500 Error' });
  }
);

export default router;
