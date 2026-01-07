function flatten(arr) {
    const result = [];
    for (let item of arr) {
        if(Array.isArray(item)) {
            result.push(...flatten(item));
        } else {
            result.push(item)
        }
    }
    return result;
}

// ===== Usage =====
const arr = [1,2,3,[4,5,[6,7]],8,9,10];
console.log(flatten(arr));