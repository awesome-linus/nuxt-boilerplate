import { NuxtConfigurationEnv } from '@nuxt/types/config/env';

// Please note that this environment variable can be referenced from the client side
// This.
// This is an environment variable for SPA usage.

const env = {
  appUrl: process.env.APP_URL || 'http://localhost:3000'
} as NuxtConfigurationEnv;

export default env;
