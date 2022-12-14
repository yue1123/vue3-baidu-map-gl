/**
 * warn 抛出警告
 * @internal
 * @param {string} 警告内容
 */
export function warn(text: string) {
  console.warn(`[Vue3 BaiduMap GL] ${text}`)
}

export function error(text: string) {
  console.error(`[Vue3 BaiduMap GL] ${text}`)
}
