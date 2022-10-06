import yxRequest from '../index'

/**
 * 新增评论
 * @param {object} data 
 * @returns 
 */
export function postSaveComment(data){
    return yxRequest.post({
        method:'POST',
        url:'/comments/save',
        data:data
    })
} 


export function postLikeComment(id){
    return yxRequest.post({
        method:'POST',
        url:`/comments/like/${id}`,
        data:{
            commnentId:id
        }
    })
}