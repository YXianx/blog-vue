import YXRequest from './request/request'
import { BASE_URL, TIME_OUT } from './request/config'

export default new YXRequest({
    baseURL: BASE_URL,
    timeout: TIME_OUT,
    interceptors: {
        requestInterceptor: (config) => {
            return config
        },
        requestInterceptorCatch: (err) => {
            return err
        },
        responseIntercptor: (res) => {
            return res
        },
        responseIntercptorCatch: (err) => {
            return err
        }
    }
})