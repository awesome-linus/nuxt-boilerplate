import Vue from 'vue';
import Error404 from '~/components/desktop/Error/Error404';
import Error500 from '~/components/desktop/Error/Error500';
import Error503 from '~/components/desktop/Error/Error503';

export default Vue.extend({
  components: {
    Error404,
    Error500,
    Error503
  },
  props: {
    error: {
      type: Object,
      default: null
    }
  }
});
