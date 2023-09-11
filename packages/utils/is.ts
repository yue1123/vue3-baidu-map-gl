export const isClient = typeof window !== 'undefined'
export const isDef = <T = any>(val?: T): val is T => typeof val !== 'undefined'
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
