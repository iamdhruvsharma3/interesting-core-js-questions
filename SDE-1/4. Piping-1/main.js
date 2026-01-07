function pipe(...fns) {
    return function(initialValue) {
        return fns.reduce((acc, fn) => fn(acc), initialValue)
    }
}

// ===== Usage =====
const add5 = x => x + 5;
const multiplyBy2 = x => x * 2;
const subtract3 = x => x - 3;

const pipeline = pipe(add5, multiplyBy2, subtract3);
console.log(pipeline(10));