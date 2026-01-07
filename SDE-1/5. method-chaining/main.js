class Calculator {
    constructor(initialValue = 0) {
        this.result = initialValue
    }
    add(num) {
        this.result += num;
        return this;
    }
    subtract(num) {
        this.result -= num;
        return this;
    }
    multiply(num) {
        this.result *= num;
        return this;
    }
    getResult() {
        return this.result
    }
}

// ===== Usage =====
const calculator = new Calculator(10);
console.log(calculator.add(5).subtract(3).multiply(2).getResult());