import Vue from 'vue';

export default Vue.extend({
  data: () => {
    return {
      pages: [
        {
          name: 'idが1234',
          path: '/path_params/1234'
        },
        {
          name: 'idが333333333333',
          path: '/path_params/333333333333'
        },
        {
          name:
            'パスパラメータが数値でないので、validateで失敗し404エラーになる',
          path: '/path_params/stringSample'
        }
      ]
    };
  }
});
