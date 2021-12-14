import Cookies from 'js-cookie'

const state = {
  sidebar: {
    opened: Cookies.get('sidebarStatus') ? !!+Cookies.get('sidebarStatus') : true,
    withoutAnimation: false
  },
  device: 'desktop',
  size: Cookies.get('size') || 'medium',
  loadingBtn: false,
  imgStatus: 'default',
  textState: true
}

const mutations = {
  TOGGLE_SIDEBAR: state => {
    state.sidebar.opened = !state.sidebar.opened
    state.sidebar.withoutAnimation = false
    if (state.sidebar.opened) {
      Cookies.set('sidebarStatus', 1)
    } else {
      Cookies.set('sidebarStatus', 0)
    }
  },
  CLOSE_SIDEBAR: (state, withoutAnimation) => {
    Cookies.set('sidebarStatus', 0)
    state.sidebar.opened = false
    state.sidebar.withoutAnimation = withoutAnimation
  },
  TOGGLE_DEVICE: (state, device) => {
    state.device = device
  },
  SET_LOADING: (state, status) => {
    state.loadingBtn = status
  },
  SET_SIZE: (state, size) => {
    state.size = size
    Cookies.set('size', size)
  },
  SET_STATUS: (state, status) => {
    state.imgStatus = status
  },
  SET_TEXT: (state, status) => {
    state.textState = status
  }
}

const actions = {
  toggleSideBar({
    commit
  }) {
    commit('TOGGLE_SIDEBAR')
  },
  closeSideBar({
    commit
  }, {
    withoutAnimation
  }) {
    commit('CLOSE_SIDEBAR', withoutAnimation)
  },
  toggleDevice({
    commit
  }, device) {
    commit('TOGGLE_DEVICE', device)
  },
  setSize({
    commit
  }, size) {
    commit('SET_SIZE', size)
  },
  setLoading({
    commit
  }, status) {
    commit('SET_LOADING', status)
  },
  setStatus({
    commit
  }, status) {
    commit('SET_STATUS', status)
  },
  setText({
    commit
  }, status) {
    commit('SET_TEXT', status)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
