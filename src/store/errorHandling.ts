import { ActionTree, MutationTree, GetterTree, ActionContext } from 'vuex';
import { RootState } from './index';
import ErrorHandlingApi from '~/api/errorHandling';
import { Throwable404Error } from '~/error/applicationError';

const errorHandlingApi = ErrorHandlingApi();

export interface State {}

export const types = {};

export const state = (): State => ({});

export const getters: GetterTree<State, RootState> = {};

export interface Actions<S, R> extends ActionTree<S, R> {
  throw404Error(context: ActionContext<S, R>): Promise<void>;
  return503Maintenance(context: ActionContext<S, R>): Promise<void>;
}

export const actions: Actions<State, RootState> = {
  throw404Error: async () => {
    const response = await errorHandlingApi.throw404Error();

    if (response.message === 'Throw 404 Error') {
      throw new Throwable404Error();
    }
  },
  return503Maintenance: async () => {
    await errorHandlingApi.return503Maintenance();
  }
};

export const mutations: MutationTree<State> = {};
