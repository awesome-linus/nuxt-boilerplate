import express, { Router } from 'express';
import bffSamples from './router/api/bffSamples';
import errorHandling from './router/api/errorHandling';
import healthcheck from './router/api/healthcheck';
import envCheck from './router/api/envCheck';

const router = Router();
const bff = express();

// Maintenance Mode
// bff.use((req, res, next) => {
//   if (req.url === '/api/healthcheck') {
//     return next();
//   }
//   return res.redirect('/errors/503.html');
// });

// Use Secret Key For Server Side(BFF)
// You Can Get Secret Key Only Server Side(BFF)

bff.use('/api', router);

router.use(bffSamples);
router.use(errorHandling);
router.use(healthcheck);
router.use(envCheck);

module.exports = bff;
