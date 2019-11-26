function fastFib(n, memo = {}) {
    if (n in memo) return memo[n];
    if (n === 1 || n === 2) return 1;

    memo[n] = fastFib(n - 1, memo) + fastFib(n - 2, memo);
    return memo[n];
}

console.log(fastFib(6));     // => 8
console.log(fastFib(50));    // => 12586269025

function factorial(n, memo={}){
    if(n in memo) return memo[n];
    if(n === 1) return 1;
    memo[n] = n * factorial(n-1, memo);
    return memo[n];
}

console.log(factorial(6));
console.log(factorial(18));