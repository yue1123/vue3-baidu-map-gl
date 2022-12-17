const regs = [
  // ak
  /\sak\=\".*\"/,
  // 全屏功能参数
  /v\-bind\=\"\$attrs\"\n*\s+/,
  // global css
  /\s*myButton|no-m-t|mySelect|light|no-m-b|my-input\s*/g,
  // empty class attr
  /\sclass="\s*"/g
]
export function hideSomeCode(code: string): string {
  regs.forEach((reg) => {
    code = code.replace(reg, '')
  })
  return code
}
