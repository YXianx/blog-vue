import { request } from "./request";

/**
 * 新增评论
 * @param {object} data 
 * @returns 
 */
export function postSaveComment(data){
    return request({
        method:'POST',
        url:'/comments/save',
        data:data
    })
} 


export function postLikeComment(id){
    return request({
        method:'POST',
        url:`/comments/like/${id}`,
        data:{
            commnentId:id
        }
    })
}