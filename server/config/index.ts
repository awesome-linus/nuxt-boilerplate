import { NuxtConfigurationEnv } from '@nuxt/types/config/env';
import commonEnv from './common';

// This is for Server Side usage.
// confidential information such as secret keys.
// Please Set Environment Variable With Direnv(local) or AWS Secret Manager(production).

const eachEnv = require(`./env/${process.env.STAGE}`).default;

const env = {
  ...commonEnv,
  ...eachEnv
} as NuxtConfigurationEnv;

export default env;
