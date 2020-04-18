import Vue from 'vue';

export default Vue.extend({
  data: () => {
    return {
      pages: [
        {
          name: 'counter',
          path: '/counter'
        },
        {
          name: '404 Error',
          path: '/error_handling/404'
        },
        {
          name: '500 Error',
          path: '/error_handling/500'
        },
        {
          name: 'agent',
          path: '/agent'
        },
        {
          name: 'query_params',
          path: '/query_params'
        },
        {
          name: 'path_params sample',
          path: '/path_params1'
        },
        {
          name: 'path_params with pagination sample. ID is 1234',
          path: '/path_params2/1234'
        }
      ]
    };
  }
});
