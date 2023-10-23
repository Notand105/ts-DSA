function factorial(num) {
    if (num == 0) {
        return 1;
    }
    return num * factorial(num - 1);
}
function fibonacci(num) {
    if (num < 2)
        return 1;
    return (fibonacci(num - 1) + fibonacci(num - 2));
}
console.log(factorial(4));
console.log(fibonacci(4));
