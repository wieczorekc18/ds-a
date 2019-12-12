

function fib(n){
    if(n <= 2) return 1
    return fib(n-1) + fib(n-2)
}

function fibb(n, memo = {}) {
    if (n in memo) return memo[n]
    if (n <= 2) return 1
    memo[n] = fibb(n - 1, memo) + fibb(n - 2, memo)
    console.log(memo[n])
    return memo[n]
}
console.log(1)
console.log(1)
console.log(fibb(10))
// console.log(fib(4))

function itFib(n){
    let array=[]
    for(let i = 0; i < n; i++){
        if(i <= 1){
            array.push(1)
            console.log
        }else{
            array.push(array[i-1]+array[i-2])
        }
    }
    return array
}

console.log(itFib(40))

function tabulatedFib(n) {
    // create a blank array of length `n`
    let table = new Array(n);

    // seed the first two values
    table[0] = 0;
    table[1] = 1;

    // complete the table by moving from left to right,
    // following the fibonacci pattern
    for (let i = 2; i <= n; i++) {
        table[i] = table[i - 1] + table[i - 2];
    }

    return table[n];
}

console.log(tabulatedFib(40))