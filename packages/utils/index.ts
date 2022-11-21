/**
 *
 * @param value 判断是否是字符串的值
 * @returns
 */
export function isString(value: any): boolean {
  return Object.prototype.toString.call(value) === '[object String]'
}

/**
 *
 * @param value 判断是否是字符串的值
 * @returns
 */
export function isArray(value: any): boolean {
  return Object.prototype.toString.call(value) === '[object Array]'
}

/**
 * 判断某个值是否是 undefined 或者 null
 * @param v 需要判断的值
 * @returns
 */
export function isDef(v: any): boolean {
  return v !== undefined && v !== null
}

/**
 * watch 回调辅助前置判断
 * @param cal watch 处理函数
 * @returns (nv: T, ov: T) => void
 */
export function callWhenDifferentValue<T>(cal: (v: T) => void): (nv: T, ov: T) => void {
  return (nv: T, ov: T) => {
    if (nv === ov || (nv !== ov && JSON.stringify(nv) !== JSON.stringify(ov))) cal(nv)
  }
}

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
