import yxRequest from '../index'

/**
 * 获取友联列表
 * @returns 返回友联列表
 */
export function getLinkList(){
    return yxRequest.get({
        url: '/links/list'
    })
}