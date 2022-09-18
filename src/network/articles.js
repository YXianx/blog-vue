import { request } from "./request"; 

/**
 * 获取首页文章列表
 * @returns 返回首页文章列表
 */
export function getArticlesList(){
    return request({
        url:'/articles/home/list' 
    })
}

/**
 * 获取文章详情
 * @param {number} id 
 * @returns 返回指定文章详情 
 */
export function getArticlesDetail(id){
    return request({
        url:`/articles/detail/${id}`
    })
}

/**
 * 获取文章评论详情
 * @param {number} id 
 * @returns 返回文章评论列表
 */
export function getArticlesComment(id){
    return request({
        url:`/comments/list/${id}`
    })
}