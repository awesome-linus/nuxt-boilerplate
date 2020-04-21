import { AxiosError } from 'axios';
import {
  Throwable404Error,
  Throwable503Maintenance
} from '~/error/applicationError';

const retrieveErrorStatus = (error: AxiosError) => {
  if (error instanceof Throwable404Error) return 404;
  if (error instanceof Throwable503Maintenance) return 503;
  return 500;
};

export default retrieveErrorStatus;
