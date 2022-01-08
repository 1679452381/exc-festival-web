import service from '../utils/axios'

export async function getArticles(channelId = '', pageNo, pageSize, tenantId = 'jxjadmin') {
    const articles = await service.get('/articles', {
        params: {
            channelId,
            pageNo,
            pageSize,
            tenantId
        }
    })
    return articles
}

export async function getArticleInfo(articleId, tenantId = 'jxjadmin') {
    const articles = await service.get('/article', {
        params: {
            articleId,
            tenantId
        }
    })
    return articles
}