import Vue from 'vue'
import store from '@/store.js'

/**
 * 格式化时间
 * @params date :utctime-'YYYY-MM-DDTHH:mm:ss.SSSZ'
 * @returns 指定时区的时间
 */
export function formatDatetime (date) {
  var m = Vue.prototype.$moment.utc(date, 'YYYY-MM-DDTHH:mm:ss.SSSZ')
  // タイムゾーンは分で指定する
  // 日本：9*60=54min
  // https://stackoverflow.com/questions/32878197/updating-time-offset-with-moment-utcoffset

  return m.utcOffset(store.state.TZDeal.TZone).format('YYYY/MM/DD HH:mm')
}

/**
 * 获取当前视口的宽度，判断默认样式
 * @returns 'sm'<769<='md'<1025<=lg<1367<=hg
 */
export function checkWidth () {
  let width = window.document.body.offsetWidth
  if (width < 769) {
    return 'sm'
  } else if (width >= 769 && width < 1025) {
    return 'md'
  } else if (width >= 1025 && width < 1367) {
    return 'lg'
  } else {
    return 'hg'
  }
}
