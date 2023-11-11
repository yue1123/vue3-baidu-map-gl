export function proxyValue<T>(target: T, key: string, defaultValue: any, callback?: (defaultValue: any) => any) {
  Object.defineProperty(target, key, {
    get() {
      return defaultValue
    },
    set(value) {
      defaultValue = value
      callback && callback(defaultValue)
    }
  })
}
