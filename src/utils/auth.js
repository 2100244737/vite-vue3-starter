import Cookies from 'js-cookie'

const TokenKey = 'smpw' + '_'

export function getToken(val) {
    const name = TokenKey + val
    return Cookies.get(name)
}

export function setToken(val, token) {
    const name = TokenKey + val
    return Cookies.set(name, token)
}

export function removeToken(val) {
    const name = TokenKey + val
    return Cookies.remove(name)
}
