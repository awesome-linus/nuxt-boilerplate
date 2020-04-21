import express, { Router } from 'express';
import bffSamples from './router/api/bffSamples';
import errorHandling from './router/api/errorHandling';
import healthcheck from './router/api/healthcheck';

const router = Router();

router.use(bffSamples);
router.use(errorHandling);
router.use(healthcheck);

const bff = express();

// Maintenance Mode
// bff.use((req, res, next) => {
//   if (req.url === '/healthcheck') {
//     return next();
//   }
//   return res.redirect('/errors/503.html');
// });

bff.use('/api', router);

module.exports = bff;
