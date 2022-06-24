export function getUrlParam(param) {
    let pageURL = window.location.href.split('?')[1],
        value = ''
    if (pageURL) {
        const urlParamArray = pageURL.split('&')
        urlParamArray.map((item) => {
            const paramName = item.split('=')
            value = paramName[0] === param ? paramName[1] : value
        })
        return value
    }
}

export function deepCopy(obj) {
    const result = Array.isArray(obj) ? [] : {}
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            if (typeof obj[key] === 'object') {
                result[key] = deepCopy(obj[key])
            } else {
                result[key] = obj[key]
            }
        }
    }
    return result
}

export function exportFile(file, name, MIME) {
    const link = document.createElement('a')
    link.download = name
    link.style.display = 'none'
    const blob = new Blob([file], { type: MIME })
    link.href = URL.createObjectURL(blob)
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    window.URL.revokeObjectURL(link.href)
}
