import Vue from 'vue';
import { Context } from '@nuxt/types';

export default Vue.extend({
  // https://ja.nuxtjs.org/api/pages-validate/
  validate({ params }) {
    // 数値でなければならない
    return /^\d+$/.test(params.id);
  },
  asyncData({ params }: Context) {
    return { params };
  }
});
