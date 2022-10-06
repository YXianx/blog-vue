import axios from 'axios'

class YXRequest {
    instance // axios实例 
    interceptors // 实例拦截器
    constructor(AxiosRequestConfig) {
        this.instance = axios.create(AxiosRequestConfig)
        this.interceptors = AxiosRequestConfig.interceptors

        // 实例请求 & 响应拦截器
        this.instance.interceptors.request.use(
            this.interceptors.requestInterceptor,
            this.interceptors.requestInterceptorCatch
        )
        this.instance.interceptors.response.use(
            this.interceptors.responseInterceptor,
            this.interceptors.responseInterceptorCatch
        )

        // 全局默认请求 & 响应拦截器
        this.instance.interceptors.request.use(
            (config) => {
                return config
            },
            (err) => {
                return config
            }
        )
        this.instance.interceptors.response.use(
            (res) => {
                return res
            },
            (err) => {
                return err
            }
        )
    }

    request(config) {
        return new Promise((resolve, reject) => {
            // 单个请求 & 响应拦截器
            if(config.interceptors != null) {
                config = config.interceptors.requestInterceptor(config)
            }
            this.instance.request(config)
            .then((res) => {
                if(config.interceptors != null) {
                    res = config.interceptors.responseInterceptor(res)
                }
                resolve(res)
            })
            .catch((err) => {
                reject(err)
            })
        })
    }

    get(config) {
        return this.request({
            ...config,
            method: 'GET'
        })
    }

    post(config) {
        return this.request({
            ...config,
            method: 'POST'
        })
    }

    delete(config) {
        return this.request({
            ...config,
            method: 'DELETE'
        })
    }

    patch(config) {
        return this.request({
            ...config,
            method: 'PATCH'
        })
    }
}

export default YXRequest