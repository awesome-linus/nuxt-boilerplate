<template>
  <ErrorDesktop v-if="this.$store.app.$device.isDesktop" :error="error" />
  <ErrorMobile v-else :error="error" />
</template>

<script lang="ts">
import Vue from 'vue';
import ErrorDesktop from '~/components/desktop/Error';
import ErrorMobile from '~/components/mobile/Error';

export default Vue.extend({
  components: {
    ErrorDesktop,
    ErrorMobile
  },
  props: {
    error: {
      type: Object,
      default: null
    }
  }
});
</script>
