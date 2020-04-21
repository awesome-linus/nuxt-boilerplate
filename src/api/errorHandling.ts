import axios, { AxiosResponse } from 'axios';
import { ErrorType } from '~/domain/errorHandling';

export const httpClient = axios.create({
  baseURL: `${process.env.appUrl}/api`,
  timeout: 5000
});

interface ErrorHandlingApi {
  throw404Error: Function;
  return503Maintenance: Function;
}

const ErrorHandlingApi = (): ErrorHandlingApi => {
  const throw404Error = (): Promise<ErrorType> => {
    return httpClient
      .get<ErrorType>('/throw404Error')
      .then((axiosResponse: AxiosResponse) => {
        return Promise.resolve(axiosResponse.data);
      });
  };
  const return503Maintenance = (): Promise<ErrorType> => {
    return httpClient
      .get<ErrorType>('/maintenance')
      .then((axiosResponse: AxiosResponse) => {
        return Promise.resolve(axiosResponse.data);
      });
  };
  return { throw404Error, return503Maintenance };
};

export default ErrorHandlingApi;
