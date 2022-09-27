import {request} from './request'

/**
 * 获取归档列表
 * @param {number} page 
 * @param {number} size 
 * @returns 
 */
export function getArchivesList(page=1,size=10){
    return request({
        url: `/articles/archives?current=${page}&size=${size}`
    })
}