/**
 * 获取当前视口的宽度，判断默认样式
 * @returns true<1025<=false
 */
export function checkWidth (size) {
  let width = size || window.document.body.offsetWidth
  if (width < 1025) {
    return true
  } else {
    return false
  }
}
