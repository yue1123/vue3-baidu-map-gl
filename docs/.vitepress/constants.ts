export const examplePath = /(\.\.\/)*examples\//g

export const exampleModuleMap: Record<string, any> = ((modules, reg) => {
  const map = Object.create(null)
  Object.keys(modules).forEach((key) => {
    map[key.replace(reg, '').replace('.vue', '')] = (modules[key] as any).default
  })
  return map
})(import.meta.glob('../examples/**/*.vue', { eager: true }), examplePath)
