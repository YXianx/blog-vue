import yxRequest from '../index'

export function requestSearchContent(keyword) {
    return yxRequest.get({
        url: '/home/search',
        params: {
            keyword
        }
    })
}