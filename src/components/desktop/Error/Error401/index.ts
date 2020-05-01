import Vue from 'vue';

export default Vue.extend({
  props: {
    error: {
      type: Object,
      default: null
    }
  }
});
