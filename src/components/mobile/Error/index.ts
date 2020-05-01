import Vue from 'vue';
import Error401 from '~/components/mobile/Error/Error401';
import Error404 from '~/components/mobile/Error/Error404';
import Error500 from '~/components/mobile/Error/Error500';

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
