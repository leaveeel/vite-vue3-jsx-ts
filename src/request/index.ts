import http from './http'

export const getname = (option: object) => {
    return http.get('/ctc/course/listWeb', option)
}

export const postname = (option: object) => {
    return http.post('/ctc/course/listWeb', option.params, {
        headers: option.headers
    })
}
