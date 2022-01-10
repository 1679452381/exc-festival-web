import service from '../utils/request'

export function getMenus() {
    return service.get('/allChannelsByparentid', {
        params: {
            parentChannelId: "1152042586446368768"
        }
    })
}