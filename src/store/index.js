
import { createStore } from 'vuex'
import getters from './getters'

// https://webpack.js.org/guides/dependency-management/#requirecontext
// 动态引入所有的模块
const modulesFiles = import.meta.globEager('./modules/**/*.js')
const modules = {}
for (const key in modulesFiles) {
  modules[key.replace(/(\.\/modules\/|\.js)/g, '')] = modulesFiles[key].default
}

Object.keys(modules).forEach(item => {
  modules[item]['namespaced'] = true
})

export default createStore({
  modules,
  getters
})
