import router from '@/router'
import store from '@/store'

/**
 * 退出登录
 */
export function logout () {
  router.replace({
    path: '/login'
  }).then(() => {
    store.commit('CLEAR_NAVTAGS')
  })
}
