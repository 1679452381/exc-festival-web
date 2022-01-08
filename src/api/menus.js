import service from '../utils/axios'

export async function getMenus() {
    const menus = await service.get('/allChannelsByparentid', {
        params: {
            parentChannelId: "1152042586446368768"
        }
    })
    return menus
}