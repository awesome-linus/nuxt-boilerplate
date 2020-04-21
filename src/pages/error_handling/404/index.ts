import Vue from 'vue';
import { Context } from '@nuxt/types';
import { AxiosError } from 'axios';
import retrieveErrorStatus from '~/error/retrieveErrorStatus';

export default Vue.extend({
  async fetch({ store, error }: Context) {
    await store
      .dispatch('errorHandling/throw404Error')
      .catch((axiosError: AxiosError) => {
        error({ statusCode: retrieveErrorStatus(axiosError) });
      });
  }
});
