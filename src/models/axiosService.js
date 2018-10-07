import axios from 'axios'
import { deleteEmptyProperty } from '../utils/utilHelper'

const getUrl = () => {
  let obj = {}
  let test = localStorage.getItem('test')
  if (test === 'test') {
    obj.paiXinUrl = 'https://w.emux.me/gaga/index.php/api/'
    obj._7mxUrl = 'https://w.emux.me/eput/index.php/api/'
  } else {
    obj.paiXinUrl = '//api.paixin.com/'
    obj._7mxUrl = '//api.7mx.com/'
  }
  return obj
}

window.changeMode = function (st) {
  if (st === '') return
  if (st === 'test') {
    localStorage.setItem('test', 'test')
  }
  if (st === 'product') {
    localStorage.setItem('test', 'product')
  }
  location.reload()
}

const config = {
  url: '',
  method: 'POST',
  withCredentials: true,
  responseType: 'json'
}

const httpAxios = (url, data = {}, params = {}, method = 'POST') => {
  let newConfig = JSON.parse(JSON.stringify(config))
  newConfig.method = method
  newConfig.url = url
  if ('POST' == method.toUpperCase()) {
    newConfig.data = deleteEmptyProperty(data)
  } else {
    delete newConfig['withCredentials']
    newConfig.responseType = 'text'
  }
  newConfig.params = deleteEmptyProperty(params)
 
  return axios(newConfig)
};



axios.interceptors.request.use(function (config) {    // 这里的config包含每次请求的内容
  let isNoCookie = config.url.indexOf(baseUrl.paiXinUrl) > -1

  if (isNoCookie) {
    let xToken = localStorage.getItem('x-token')
    config.headers['no-cookie'] = '1'
    if(xToken) {
      config.headers['x-token'] = xToken
    }
  }
  
  return config;
}, function (err) {
  return Promise.reject(err);
});


axios.interceptors.response.use(function (response) {
  let xToken = response.headers['x-token'];
  if(xToken || xToken == '')
  {
    localStorage.setItem('x-token',xToken)
  } 
  return response;
}, function (error) {
  return Promise.reject(error);
});

const httpAxiosCookie = (url, data = {}, params = {}, method = 'POST') => {
  let newConfig = JSON.parse(JSON.stringify(config))
  newConfig.method = method
  newConfig.url = url
  if ('POST' == method.toUpperCase()) {
    newConfig.data = deleteEmptyProperty(data)
  } else {
    delete newConfig['withCredentials']
    newConfig.responseType = 'text'
  }
  newConfig.params = deleteEmptyProperty(params)
  return axios(newConfig)
};

const baseUrl = getUrl()

export { httpAxios, baseUrl, httpAxiosCookie }