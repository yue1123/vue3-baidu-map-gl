export function conditionalCall<T>(
  conditionalFlagGetter: () => boolean,
  trulyCall: (arg: T) => void,
  falselyCall: (arg: T) => void
) {
  return (arg: T) => (conditionalFlagGetter() ? trulyCall(arg) : falselyCall(arg))
}
