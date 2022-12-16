const regs = [
  // ak
  /\sak\=\".*\"/,
  // 全屏功能参数
  /v\-bind\=\"\$attrs\"\n*\s+/,
  // global css
  /myButton|no-m-t|mySelect|light|no-m-b|my-input/g,
  // empty class attr
  /\sclass=""/
]
export function hideSomeCode(code: string): string {
  regs.forEach((reg) => {
    code = code.replace(reg, '')
  })
  return code
}
