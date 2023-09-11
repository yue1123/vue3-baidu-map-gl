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

export const getInitEventKey = (id: string) => `__initd__${id}`
