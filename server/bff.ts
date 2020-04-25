import express, { Router } from 'express';
import env from './config';
import bffSamples from './router/api/bffSamples';
import errorHandling from './router/api/errorHandling';
import healthcheck from './router/api/healthcheck';

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
console.log('Environment Variables For Server Side(BFF)');
console.log(env.anySecretKey);

bff.use('/api', router);

router.use(bffSamples);
router.use(errorHandling);
router.use(healthcheck);

module.exports = bff;
