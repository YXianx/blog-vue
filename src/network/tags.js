import {request} from './request'
/**
 * 获取标签列表
 * @returns 标签列表
 */
export function getTagsList(){
    return request({
        url:'/tags/list'
    })
}

/**
 * 获取带有标签id的文章列表
 * @param {number} id 
 */
export function getTagArticles(id){
    return request({
        url:`/articles/condition?tagId=${id}`,
    })
}