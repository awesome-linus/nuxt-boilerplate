import Vue from 'vue';
import ErrorPc from '~/components/desktop/error';
import ErrorSp from '~/components/desktop/error';

export default Vue.extend({
  components: {
    ErrorPc,
    ErrorSp
  },
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  head() {
    const href: string = this.$store.app.$device.isDesktop
      ? '/css/error_pc.css'
      : '/css/error_sp.css';
    return {
      link: [{ rel: 'stylesheet', href }]
    };
  }
});
