import request from '@/utils/request'

export function send(data) {
  return request({
    url: '/index/index/send',
    method: 'post',
    data
  })
}