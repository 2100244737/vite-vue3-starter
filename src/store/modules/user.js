import { login } from '@/api/user'
import { removeToken } from '@/utils/auth'
import { resetRouter } from '@/router'
import Cookies from 'js-cookie'

const state = {
  token: '',
  avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
  introduction: ''
}

const mutations = {
  SET_TOKEN: (state, token) => {
    state.token = token
  },
  SET_INTRODUCTION: (state, introduction) => {
    state.introduction = introduction
  }
}

const actions = {
  // user login
  login({
    commit
  }, userInfo) {
    return new Promise((resolve, reject) => {
      login(userInfo).then(response => {
        resolve()
      }).catch(error => {
        reject(error)
      })
    })
  },
  // user logout
  logout({
    commit,
    state,
    dispatch
  }) {
    return new Promise((resolve, reject) => {
      removeToken('openId')
      removeToken('accessToken')
      resetRouter()
      Cookies.remove('SSO_TOKEN', { path: '/', domain: glob.ssoTokenUrl })
      dispatch('tagsView/delAllViews', null, {
        root: true
      })
      resolve()
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
