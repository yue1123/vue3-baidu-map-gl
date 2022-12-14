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
