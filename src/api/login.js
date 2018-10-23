import request from '@/utils/request'

export function logout() {
  return request({
    url: '/auth/logout',
    method: 'post'
  })
}

export function getUserInfo(token) {
  return request({
    url: '/user/user_info',
    method: 'get'
  })
}

export function loginByEmail(email, password) {
  const loginData = {
    email,
    password
  }
  return request({
    url: '/auth/login',
    method: 'post',
    data: loginData
  })
}
