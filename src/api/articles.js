import service from '../utils/request'

export function getArticles(channelId = '', pageNo, pageSize, tenantId = 'jxjadmin') {
    return service.get('/articles', {
        params: {
            channelId,
            pageNo,
            pageSize,
            tenantId
        }
    })
}

export function getArticleInfo(articleId, tenantId = 'jxjadmin') {
    return service.get('/article', {
        params: {
            articleId,
            tenantId
        }
    })
}