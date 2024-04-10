// import axios from "axios";


export default function ({$axios}, inject) {
  const api = $axios.create({
    headers: {
      common: {
        Accept: 'text/plain, */*'
      }
    }
  })

  api.interceptors.request.use(
    function (config) {
      localStorage.getItem('auth-token') ? config.headers.Authorization = `Token ${localStorage.getItem('auth-token')}` : ''
      return config;
    },
    function (error) {
      // Do something with request error
      return Promise.reject(error);
    }
  );


  api.interceptors.response.use(
    function (response) {
      // Do something with response data
      return response;
    },
    async function (error) {
      // Do something with response error
      let request = error.config
      console.log(error)
      if (error.response.status === 401 || error.response.status === 403) {
        localStorage.removeItem('auth-token')
        // await router.replace({name: "login"})

      } else {
        return Promise.reject(error);
      }
    }
  );

  // Inject to context as $api
  inject('api', api)

}


