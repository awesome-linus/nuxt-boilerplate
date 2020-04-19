import Vue from 'vue';
import Error404 from '~/components/desktop/Error/Error404';
import Error500 from '~/components/desktop/Error/Error500';

export default Vue.extend({
  components: {
    Error404,
    Error500
  },
  props: {
    error: {
      type: Object,
      default: null
    }
  }
});
