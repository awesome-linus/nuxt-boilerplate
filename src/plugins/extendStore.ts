// import { Store } from 'vuex';
// import { Context } from '@nuxt/types';
import retrieveErrorStatus from '~/error/retrieveErrorStatus';

export default (context: any, inject: any) => {
  const dispatch = (type: any, payload: any): Promise<any> => {
    return store.dispatch(type, payload).catch((err: any) => {
      console.log('occur error');
      console.log('occur error');
      console.log(err);
      context.error({ statusCode: retrieveErrorStatus(err) });
    });
  };
  const store: any = context.store;
  inject('$extendStore', store);

  context.$extendStore = {
    ...store,
    dispatch
  };
};
