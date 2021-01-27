const mutations = {
  // 清除vuex缓存
  CLEAR_VUEX (state) {
    if (state.initState && typeof state.initState === 'function') {
      const initState = state.initState()
      for (const key in initState) {
        if (Object.prototype.hasOwnProperty.call(initState, key)) {
          state[key] = initState[key]
        }
      }
    }
  },
  // 设置路由数组
  SET_ROUTES (state, res) {
    state.permissionMenu = res
  },
  // 设置左侧菜单栏状态
  SET_COLLAPSE (state, res) {
    state.isCollapse = res
  },
  // 设置是否移动端
  SET_ISMOBILE (state, res) {
    state.isMobile = res
  },
  // 清空导航栏标签
  CLEAR_NAVTAGS (state, res) {
    state.navTags = []
  },
  // 添加导航栏标签
  ADD_NAVTAG (state, res) {
    if (state.navTags.findIndex(item => item.path === res.path) === -1) {
      state.navTags.push(res)
    }
  },
  DELETE_NAVTAG (state, index) {
    state.navTags.splice(index, 1)
  }
}
export default mutations
