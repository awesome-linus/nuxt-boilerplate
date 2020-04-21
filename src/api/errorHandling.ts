import axios, { AxiosResponse } from 'axios';
import { ErrorType } from '~/domain/errorHandling';

export const httpClient = axios.create({
  baseURL: `${process.env.appUrl}/api`,
  timeout: 5000
});

export const throw404Error = (): Promise<ErrorType> => {
  return httpClient
    .get<ErrorType>('/throw404Error')
    .then((axiosResponse: AxiosResponse) => {
      return Promise.resolve(axiosResponse.data);
    });
};
