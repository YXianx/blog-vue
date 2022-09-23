import axios from 'axios'

export function request(config){
    const instance = axios.create({
        baseURL: 'http://49.0.246.101:8888/',
    })

    return instance(config)
}