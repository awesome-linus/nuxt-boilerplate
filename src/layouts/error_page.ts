import Vue from 'vue';
import ErrorPc from '~/components/pc/error';
import ErrorSp from '~/components/sp/error';

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
    // const href: string = this.$store.app.$device.isDesktop? '/css/error_pc.css':'/css/error_sp.css';
    return {
      // link: [{ rel: 'stylesheet', href }]
    };
  }
});
