import axios from 'axios';
import store from '@/store';
import { Message } from "element-ui";
export function download (url, params, title) {
  axios({
    method: 'post',
    url: url,
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
      'token': store.state.token
      // 'X-CSRF-TOKEN': store.state.token
    },
    data: params
  }).then(res => {
    Message.success(res.data.msg)
  }).catch((err) => {
    Message.error(err.data.msg)
  })
}