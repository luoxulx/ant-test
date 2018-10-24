import request from '@/utils/request'

export function articleList(query) {
  return request({
    url: '/article',
    method: 'get',
    params: query
  })
}

export function showOne(id) {
  return request({
    url: '/article/show',
    method: 'get',
    params: { id }
  })
}

export function fetchPv(pv) {
  return request({
    url: '/article/pv',
    method: 'get',
    params: { pv }
  })
}

export function storeOne(data) {
  return request({
    url: '/article/store',
    method: 'post',
    data
  })
}

export function updateOne(data) {
  return request({
    url: '/article/update',
    method: 'put',
    data
  })
}

export function deleteOne(id) {
  return request({
    url: '/article/destory',
    method: 'delete',
    params: { id }
  })
}
