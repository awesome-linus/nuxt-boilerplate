import Vue from 'vue';
// import { Context } from '@nuxt/types';
// import { AxiosError } from 'axios';
// import retrieveErrorStatus from '~/error/retrieveErrorStatus';

export default Vue.extend({
  async fetch({ $extendStore }: any) {
    await $extendStore.dispatch('errorHandling/throw401Error');
  }
});
