import { ActionTree, MutationTree, GetterTree, ActionContext } from 'vuex';
import { RootState } from './index';
import ErrorHandlingApi from '~/api/errorHandling';
import { Unauthorized, NotFound } from '~/error/applicationError';

export interface State {}

export const types = {};

export const state = (): State => ({});

export const getters: GetterTree<State, RootState> = {};

export interface Actions<S, R> extends ActionTree<S, R> {
  throw404Error(context: ActionContext<S, R>): Promise<void>;
}

export const actions: Actions<State, RootState> = {
  throw401Error: async () => {
    const response = await ErrorHandlingApi.throw401Error();

    if (response.message === 'Throw 401 Error') {
      throw new Unauthorized();
    }
  },
  throw404Error: async () => {
    const response = await ErrorHandlingApi.throw404Error();

    if (response.message === 'Throw 404 Error') {
      throw new NotFound();
    }
  }
};

export const mutations: MutationTree<State> = {};
