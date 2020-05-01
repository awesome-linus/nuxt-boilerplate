import { AxiosError } from 'axios';
import { Unauthorized, NotFound } from '~/error/applicationError';

const retrieveErrorStatus = (error: AxiosError) => {
  if (error instanceof Unauthorized) return 401;
  if (error instanceof NotFound) return 404;
  return 500;
};

export default retrieveErrorStatus;
