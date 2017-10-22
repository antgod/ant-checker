const reduce = (obj, handler, initial = {}) => Object.keys(obj).reduce((last, key, index) => handler(last, obj[key], key, index), initial)
const map = (obj, handler) => reduce(obj, (last, value, key, index) => ({ ...last, [key]: handler(value, key, index) }))
const isNull = obj => obj === undefined || obj === null
const exec = (condition, handle, defaultValue) => (...args) => !!condition ? handle(...args) : defaultValue
const setDefault = (current, defaultValue) => current || defaultValue
const exer = (target, name) => (...args) => {
  const cleat = target[name] || target
  return typeof cleat === 'function' ? exec(cleat, cleat)(...args) : cleat
}
const guard = (checker, handle, errorHandle) => (...args) => exer(checker)(...args) ? handle(...args) : errorHandle(...args)
const cat = (...args) => {
  const [head, ...rest] = args
  return head.concat(...rest)
}

export {
  reduce,
  map,
  isNull,
  cat,
  setDefault,
  guard,
}
