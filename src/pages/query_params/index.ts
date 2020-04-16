import Vue from 'vue';
import { Context } from '@nuxt/types';

export default Vue.extend({
  watchQuery: true,
  asyncData({ query }: Context) {
    const selectedQuery = query.query || 'nothing';
    return { selectedQuery };
  },
  methods: {
    async selectQuery(event: Event): Promise<void> {
      const value = (<HTMLInputElement>event.target).value;
      await this.$router.push(`/query_params?query=${value}`);
    }
  }
});
