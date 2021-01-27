import service from '@/utils/request'
const url = '/v1/user'

/**
 * 登录
 * @returns {Promise<AxiosResponse<any>>}
 */
export function login () {
  const link = `${url}/token`
  return service.get(link)
}
