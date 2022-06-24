import axios from 'axios'

const http = axios.create({
    baseURL: window.serverConfig.baseURL,
    timeout: 100000
})

//请求拦截器
http.interceptors.request.use(
    function (config) {
        console.log(config, 'request//')
        return config
    },
    function (error) {
        console.log(error, 'requesterr//')
        return Promise.reject(error)
    }
)

//响应拦截器
http.interceptors.response.use(
    function (response) {
        console.log(response, 'response//')
        const data = response.data
        switch (data.code) {
            case 405:
                console.log(data.message)
                return
            default:
                return data
        }
        return data
    },
    function (error) {
        console.log(error, 'responseerr//')
        return Promise.reject(error)
    }
)

export default http
