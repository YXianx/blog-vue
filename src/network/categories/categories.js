import yxRequest from '../index'

/**
 * 获取分类列表
 * @returns 返回分类列表
 */
export function getCategoryList(){
    return yxRequest.get({
        url: '/admin/category/listPage'
    })
}

/**
 * 获取带有分类id的文章列表
 * @param {number} id 
 */
 export function getCategoryArticles(id){
    return yxRequest.get({
        url:`/articles/condition?categoryId=${id}`,
    })
}