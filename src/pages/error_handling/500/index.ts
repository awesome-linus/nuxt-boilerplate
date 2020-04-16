import Vue from 'vue';
import { Context } from '@nuxt/types';

export default Vue.extend({
  async fetch({ error }: Context) {
    console.error('Test Error Occured: 500');
    await error({ statusCode: 500 });
  }
});
