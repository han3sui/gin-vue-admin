const defaultState = {
  // 用户菜单列表
  permissionMenu: [],
  // 左侧导航栏是否折叠
  isCollapse: false,
  // 是否移动端
  isMobile: false,
  // 导航栏标签
  navTags: [],
  // token
  token: null
}
const state = {
  ...defaultState,
  initState () {
    return defaultState
  }
}
export default state
