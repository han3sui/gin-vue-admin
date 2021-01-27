import store from '../store'
import { v4 as uuidv4 } from 'uuid'
/**
 * 判断是否移动端，根据userAgent和屏幕宽度判断
 * @returns {boolean|boolean}
 */
export function isMobile () {
  const flag = navigator.userAgent.match(
    /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
  )
  const res = !!flag || window.matchMedia('(max-width: 750px)').matches
  store.commit('SET_ISMOBILE', res)
  return res
}

/**
 * 防抖
 * @param func
 * @param delay
 * @returns {function(...[*]=): void}
 */
export function debounce (func, delay) {
  let timer
  return function (...args) {
    timer && clearTimeout(timer)
    timer = setTimeout(() => {
      func.apply(this, args)
    }, delay)
  }
}

/**
 * 节流
 * @param func
 * @param delay
 * @returns {function(...[*]=): void}
 */
export function throttle (func, delay) {
  let prev
  return function (...args) {
    const now = new Date()
    if (!prev || now - prev >= delay) {
      func.apply(this, args)
      prev = new Date()
    }
  }
}

/**
 *localStorage缓存
 */
export function storage () {
  const get = (key) => {
    return window.localStorage.getItem(key)
  }
  const set = (key, val) => {
    window.localStorage.setItem(
      key,
      typeof val !== 'string' ? JSON.stringify(val) : val
    )
  }
  const del = (key) => {
    window.localStorage.removeItem(key)
  }
  const clear = () => {
    window.localStorage.clear()
  }
  return { get, set, del, clear }
}

/**
 * sessionStorage缓存
 */
export function session () {
  const get = (key) => {
    return window.sessionStorage.getItem(key)
  }
  const set = (key, val) => {
    window.sessionStorage.setItem(
      key,
      typeof val !== 'string' ? JSON.stringify(val) : val
    )
  }
  const del = (key) => {
    window.sessionStorage.removeItem(key)
  }
  const clear = () => {
    window.sessionStorage.clear()
  }
  return { get, set, del, clear }
}

/**
 * 生成uuid v4，'9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'
 * @returns {*|string}
 */
export function uuid () {
  return uuidv4()
}
