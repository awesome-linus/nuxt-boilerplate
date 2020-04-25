import Vue from 'vue';

export default Vue.extend({
  data() {
    return {
      pages: [
        {
          name: 'idが1234',
          path: `${this.$route.path}/1234`
        },
        {
          name: 'idが333333333333',
          path: `${this.$route.path}/333333333333`
        },
        {
          name:
            'パスパラメータが数値でないので、validateで失敗し404エラーになる',
          path: `${this.$route.path}/stringSample`
        }
      ]
    };
  }
});
