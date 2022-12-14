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
