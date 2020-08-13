function factorial(num) {
    var factorialValue = 1;

    // 코드를 작성하세요.
    if (num < 2) {
        return factorialValue;
    }

    for (var i = num; i > 0; i--) {
        factorialValue *= i;
    }

    return factorialValue;
}

console.log(factorial(10));
console.log(factorial(5));
console.log(factorial(3));
console.log(factorial(0));
