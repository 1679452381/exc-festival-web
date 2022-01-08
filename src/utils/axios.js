import axios from "axios"

const service = axios.create({
    // baseURL: process.env.VUE_APP_BASE_API,
    baseURL: "/api",
    timeout: 5000
})
service.interceptors.response.use(response => {
    if (response.status === 200) {
        return response.data
    }
})

export default service