function curry(fn) {
    return function curried(...args) {
        if(args.length >=fn.length) {
            return fn(...args)
        } else {
            return function(...nextArgs) {
                return curried(...args, ...nextArgs)
            }
        }
    }
}

// ===== Usage =====
const add = (a, b, c) => a + b + c;
const curriedAdd = curry(add);
console.log(curriedAdd(1)(2)(3));