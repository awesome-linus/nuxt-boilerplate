import Vue from 'vue';

export default Vue.extend({
  fetch() {
    // Environment Variables check
    // For Client Side(Nuxt)
    console.log('Environment Variables For Client Side');
    console.log(process.env.appUrl);

    // You Can Not Get Secret Key In Clinet Side(Nuxt)
    console.log('Environment Variables For Server Side(BFF)');
    console.log(process.env.anySecretKey);
  },
  data: () => {
    return {
      pages: [
        {
          name: 'counter',
          path: '/counter'
        },
        {
          name: '401 Error(Unauthorized)',
          path: '/error_handling/401'
        },
        {
          name: '404 Error(Not Found)',
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
