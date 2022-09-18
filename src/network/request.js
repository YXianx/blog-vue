import axios from 'axios'

export function request(config){
    const instance = axios.create({
        baseURL: 'http://36.139.164.121:8888/',
    })

    return instance(config)
}