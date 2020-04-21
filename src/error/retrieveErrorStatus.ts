import { AxiosError } from 'axios';
import { Throwable404Error } from '~/error/applicationError';

const retrieveErrorStatus = (error: AxiosError) => {
  if (error instanceof Throwable404Error) return 404;
  return 500;
};

export default retrieveErrorStatus;
