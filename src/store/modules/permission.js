import {asyncRoutes, constantRoutes} from '@/router'
import {login} from '@/api/user'

export function filterAsyncRoutes(routes) {
  const res = []
  routes.forEach(item => {
    asyncRoutes.forEach(val => {
      if (item.path === val.path) {
        var obj = {}
        obj.path = val.path
        obj.meta = val.meta
        obj.name = val.name
        obj.hidden = val.hidden
        obj.redirect = val.redirect
        obj.component = val.component
        obj.alwaysShow = val.alwaysShow
        obj.meta.title = item.name
        if (val.meta.icon) {
          obj.meta.icon = val.meta.icon
        }
        if (val.meta.affix) {
          obj.meta.affix = val.meta.affix
        }
        obj.children = []
        if (item.children.length > 0 && val.children.length > 0) {
          item.children.forEach(val1 => {
            val.children.forEach(val2 => {
              var childPath = val.path + '/' + val2.path
              if (val1.path === childPath) {
                var obj1 = {}
                obj1.path = val2.path
                obj1.meta = val2.meta
                obj1.name = val2.name
                obj1.meta.title = val1.name
                obj1.component = val2.component
                if (val2.meta.icon) {
                  obj1.meta.icon = val2.meta.icon
                }
                if (val2.meta.affix) {
                  obj1.meta.affix = val2.meta.affix
                }
                if (val2.meta.popover) {
                  obj1.meta.popover = val2.meta.popover
                }
                obj.children.push(obj1)
              }
            })
          })
        }
        res.push(obj)
      }
    })
  })

  return res
}

const state = {
  routes: [],
  addRoutes: [],
  name: '',
  menuList: [],
  isAdmin: '',
  orgYgzId: '',
  roleIds: '',
  orgName: '',
  orgLevel: '',
  mobile: '',
  orgCode: ''
}

const mutations = {
  SET_ROUTES: (state, routes) => {
    state.addRoutes = routes
    state.routes = constantRoutes.concat(routes)
  },
  SET_NAME: (state, name) => {
    state.name = name
  },
  SET_MENU_LIST: (state, list) => {
    state.menuList = list
  },
  SET_ADMIN: (state, value) => {
    state.isAdmin = value
  },
  SET_ORG: (state, value) => {
    state.orgYgzId = value
  },
  SET_ROLEID: (state, value) => {
    state.roleIds = value
  },
  SET_ORGNAME: (state, value) => {
    state.orgName = value
  },
  SET_ORGLEVEL: (state, value) => {
    state.orgLevel = value
  },
  SET_ORGCODE: (state, value) => {
    state.orgCode = value
  },
  SET_MOBILE: (state, value) => {
    state.mobile = value
  }
}

const actions = {
  generateRoutes({
    commit
  }, userInfo) {
    return new Promise((resolve, reject) => {
      login(userInfo).then(response => {
        const dataModel = JSON.parse(response.bizContent)
        const list = filterAsyncRoutes(dataModel.menus)
        commit('SET_NAME', dataModel.name) // 用户姓名
        commit('SET_MOBILE', dataModel.mobile) // 用户手机号
        commit('SET_MENU_LIST', dataModel.menus) // 用户菜单
        commit('SET_ROUTES', list) // 新增路由
        commit('SET_ADMIN', dataModel.admin) // 是否是超级管理员
        commit('SET_ORG', dataModel.orgYgzId) // 营改增
        commit('SET_ROLEID', dataModel.roleId) // 角色Id
        commit('SET_ORGNAME', dataModel.orgName) // 当前所属单位
        commit('SET_ORGLEVEL', dataModel.orgLevel) // 当前所属单位层级
        commit('SET_ORGCODE', dataModel.orgCode) // 机构代码
        resolve(list)
      }).catch(error => {
        reject(error)
      })
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
