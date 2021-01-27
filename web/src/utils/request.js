import axios from 'axios'
import store from '@/store'
import router from '@/router'
import { storage, uuid, debounce } from '@/utils/util'
import { Message, Notification } from 'element-ui'

const service = axios.create({
  baseURL: process.env.VUE_APP_API_URL,
  timeout: 10000
})

/**
 * 需要重新登录的错误code
 * @type {number[]}
 */
const loginCode = [401]

/**
 * 屏蔽错误提示的code
 * @type {*[]}
 */
const disableNotifyCode = []

/**
 * 配置请求拦截器
 */
service.interceptors.request.use(config => {
  const token = store.state.token || storage().get('token')
  config.headers.Authorization = `Bearer ${token}`
  if (config.method.toUpperCase() === 'GET') {
    config.params = {
      _t: uuid(),
      ...config.params
    }
  }
  return config
}, error => {
  return Promise.reject(error)
})

/**
 * 配置响应拦截器
 */
service.interceptors.response.use(response => {
  return Promise.resolve(response.data)
}, error => {
  if (error.response) {
    if (loginCode.includes(error.response.data.code)) {
      // 触发重新登录错误码
      Notification.error({
        title: '错误',
        message: '请求失败，即将跳转到登录页，请重新登录'
      })
      store.commit('CLEAR_VUEX')
      storage().clear()
      debounce(() => {
        router.replace({
          path: '/login'
        }).then(r => {})
      }, 2000)
    } else if (disableNotifyCode.includes(error.response.data.code)) {
      // 触发禁止提醒错误码，直接返回错误内容
      return Promise.reject(error.response.data)
    } else if (error.response.data.message) {
      // 如果存在具体错误提示，直接全局提醒
      Message.error(error.response.data.message)
      return Promise.reject(error.response.data)
    } else {
      // 无错误内容，可能是跨域或者其他错误
      Message.error('网络错误，请稍后再试')
      return Promise.reject(new Error('网络错误，请稍后再试'))
    }
  } else {
    // 没有响应内容
    Notification.error({
      title: '错误',
      message: '请求超时，请刷新重试'
    })
    return Promise.reject(new Error('请求超时, 请刷新重试'))
  }
})
