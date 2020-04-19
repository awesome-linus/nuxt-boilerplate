import Vue from 'vue';

export default Vue.extend({
  name: 'Buttons',
  props: {
    text: {
      type: String,
      required: false,
      default: ''
    },
    kind: {
      type: String,
      required: false,
      default: ''
    },
    size: {
      type: String,
      required: false,
      default: ''
    },
    disabled: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  methods: {
    onclick(e: Event) {
      this.$emit('click', e);
    }
  }
});
