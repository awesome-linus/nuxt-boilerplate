import { ActionTree, MutationTree, GetterTree, ActionContext } from 'vuex';
import { RootState } from './index';
import { throw404Error } from '~/api/errorHandling';
import { Throwable404Error } from '~/error/applicationError';

export interface State {}

export const types = {};

export const state = (): State => ({});

export const getters: GetterTree<State, RootState> = {};

export interface Actions<S, R> extends ActionTree<S, R> {
  occurError(context: ActionContext<S, R>): Promise<void>;
}

export const actions: Actions<State, RootState> = {
  occurError: async () => {
    const response = await throw404Error();

    if (response.message === 'Throw 404 Error') {
      throw new Throwable404Error();
    }
  }
};

export const mutations: MutationTree<State> = {};
