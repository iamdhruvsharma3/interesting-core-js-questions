function createToggle(initialState = false) {
    let state = initialState;
    return () => {
        state = !state;
        return state;
    }
}

// ===== Usage =====
const toggle = createToggle(false);
console.log(toggle());
console.log(toggle());
console.log(toggle());