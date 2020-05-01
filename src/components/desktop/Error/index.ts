import Vue from 'vue';
import Error401 from '~/components/desktop/Error/Error401';
import Error404 from '~/components/desktop/Error/Error404';
import Error500 from '~/components/desktop/Error/Error500';

export default Vue.extend({
  components: {
    Error401,
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
