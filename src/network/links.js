import {request} from './request'

/**
 * 获取友联列表
 * @returns 返回友联列表
 */
export function getLinkList(){
    return request({
        url: '/likns/list'
    })
}