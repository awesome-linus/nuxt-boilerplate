import Vue from 'vue';
import { mapGetters } from 'vuex';
import CurrentCount from '~/components/desktop/CurrentCount';
import IncrementButton from '~/components/desktop/IncrementButton';
import AsyncIncrementButton from '~/components/desktop/AsyncIncrementButton';
import DecrementButton from '~/components/desktop/DecrementButton';

export default Vue.extend({
  components: {
    CurrentCount,
    AsyncIncrementButton,
    IncrementButton,
    DecrementButton
  },
  computed: {
    ...mapGetters('counter', ['currentCount'])
  }
});
