import yxRequest from '../index'

/**
 * 获取首页的用户卡片信息
 * @returns 返回用户账号相关信息
 */
export function getHomeUserInfo(){
    return yxRequest.get({
        url: '/user/home/info'
    })
}