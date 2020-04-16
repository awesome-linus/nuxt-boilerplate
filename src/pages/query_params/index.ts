import Vue from 'vue';
import { Context } from '@nuxt/types';

export default Vue.extend({
  async fetch({ query }: Context) {
    await console.log(query);
  }
});
