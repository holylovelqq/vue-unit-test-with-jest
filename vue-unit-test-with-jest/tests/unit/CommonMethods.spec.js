/**
 * CommonMethods.js文件
 * 测试内容包括以下
 * 文件内存放的方法的测试
 */
import { checkWidth } from '@/assets/js/CommonMethods.js'

describe('CommonMethods.js', () => {
  // 测试内容：checkWidth
  // 测试应该包括该函数的所有可能性
  it('checkWidth() test', () => {
    // 不传参数，默认使用window.document.body.offsetWidth，测试环境下值为0
    expect(checkWidth()).toBe(true)
    // 参数小于1025
    expect(checkWidth(1024)).toBe(true)
    // 参数大于等于1025
    expect(checkWidth(1025)).toBe(false)
  })
})
