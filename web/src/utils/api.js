import router from '@/router'
import store from '@/store'
export function logout () {
  router.replace({
    path: '/login'
  }).then(() => {
    store.commit('CLEAR_NAVTAGS')
  })
}
