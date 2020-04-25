import { NuxtConfigurationEnv } from '@nuxt/types/config/env';
import commonEnv from './common';

// Please note that this environment variable can be referenced from the client side
// This.
// This is an environment variable for SPA usage.
const eachEnv = require(`./env/${process.env.STAGE}`).default;

const env = {
  ...commonEnv,
  ...eachEnv
} as NuxtConfigurationEnv;

export default env;
