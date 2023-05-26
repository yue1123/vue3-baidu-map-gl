export const isClient = typeof window !== 'undefined'
export const isDef = <T = any>(val?: T): val is T => typeof val !== 'undefined'
export const notNullish = <T = any>(val?: T | null | undefined): val is T => val != null
export const assert = (condition: boolean, ...infos: any[]) => {
  if (!condition) console.warn(...infos)
}
const toString = Object.prototype.toString
export const isObject = (val: any): val is object => toString.call(val) === '[object Object]'
export const now = () => Date.now()
export const timestamp = () => +Date.now()
export const clamp = (n: number, min: number, max: number) => Math.min(max, Math.max(min, n))
// eslint-disable-next-line @typescript-eslint/no-empty-function
export const noop = () => {}
export const rand = (min: number, max: number) => {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min
}
export const hasOwn = <T extends object, K extends keyof T>(val: T, key: K): key is K =>
  Object.prototype.hasOwnProperty.call(val, key)

export const isIOS = /*#__PURE__*/ getIsIOS()

function getIsIOS() {
  return (
    isClient &&
    /*#__PURE__*/ window?.navigator?.userAgent &&
    /*#__PURE__*/ /iP(ad|hone|od)/.test(/*#__PURE__*/ window.navigator.userAgent)
  )
}
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
