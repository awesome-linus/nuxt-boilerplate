// This is for Server Side usage.
// confidential information such as secret keys.
// Please Set Environment Variable With Direnv(local) or AWS Secret Manager(production).

const env = {
  anySecretKey: process.env.ANY_SECRET_KEY,
  anySecretKeySecond: process.env.ANY_SECRET_KEY_SECOND
};

export default env;
