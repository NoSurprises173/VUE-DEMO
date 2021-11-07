//二次封装axios拦截器

import axios from 'axios'
import config from '../config/index'
//设置配置，根据开发与生产环境不同

const baseUrl=process.env.NODE_ENV ==='development' ? config.baseUrl.dev:config.baseUrl.pro
class HttpRequst{
    constructor(baseUrl){
        this.baseUrl=baseUrl
    }
    getInsideConfig(){
        const config={
            baseURL:this.baseUrl,
            header: {

            }
        }
        return config
    }
    interceptors(instance){
        // 添加请求拦截器
instance.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    console.log('拦截处理请求');
    return config;
  }, function (error) {
    // 对请求错误做些什么
    console.log(error);
    return Promise.reject(error);
  });

  instance.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    console.log("处理响应")
    return response.data;
  }, function (error) {
    // 对响应错误做点什么
    console.log(error)
    return Promise.reject(error);
  });
    }

    request(options){
        const instanse =axios.create()
        //技巧
        options = { ...(this.getInsideConfig()), ...options}
        this.interceptors(instanse)
        return instanse(options)
    }

}

export default new HttpRequst(baseUrl)