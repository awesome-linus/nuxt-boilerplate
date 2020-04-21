import express, { Router } from 'express';
import bffSamples from './router/api/bffSamples';
import errorHandling from './router/api/errorHandling';

const router = Router();

router.use(bffSamples);
router.use(errorHandling);

const bff = express();

bff.use('/api', router);

module.exports = bff;
