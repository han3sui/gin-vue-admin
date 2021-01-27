import Layout from '@/layout'

const baseRoutes = [
  {
    path: '/login',
    name: 'Login',
    meta: {
      title: '登录'
    },
    component: () => import('../views/login/index')
  },
  {
    path: '/',
    name: 'Index',
    redirect: '/form',
    component: Layout,
    children: [{
      path: '/form',
      name: 'Form',
      meta: {
        title: '表单',
        icon: 'el-icon-tickets'
      },
      component: () => import(/* webpackChunkName: "form" */ '../views/form/index')
    }, {
      path: '/dashboard',
      name: 'Dashboard',
      meta: {
        title: '首页',
        icon: 'el-icon-user'
      },
      children: [{
        path: '/dashboard/index1',
        name: 'Dashboard1',
        meta: {
          title: '首页1'
        }
      }]
    }, {
      path: '/logout',
      name: 'Logout',
      meta: {
        title: '退出',
        icon: 'el-icon-switch-button'
      }
    }]
  }
]

export default baseRoutes
