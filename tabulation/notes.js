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

console.log(tabulatedFib(7));      // => 13

function fib(n) {
    if (n === 0) return 0;
    if (n === 1) return 1;

    let secondLast = 0
    let last = 1;

    for (let i = 2; i <= n; i++) {
        let temp = last;
        last = last + secondLast;
        secondLast = temp;
    }

    return last;
}


// function solve(k, numbers, memo = {}) {
//     // Write your code here
//     let key = numbers + "";
//     if(key in memo) return memo[key];
//     if (numbers.length % k !== 0) return "No";
//     if (numbers.length === 0) return "Yes";
//     // let numSubs = numbers.length/k;
//     // let table = new Array(numSubs).fill("no")
//     for (let i = 0; i < numbers.length; i++) {
//         let subSet = []
//         subSet.push(numbers[i])
//         for (let j = 0; j < numbers.length; j++) {
//             if (!subSet.includes(numbers[j])) {
//                 subSet.push(numbers[j])
//                 if (subSet.length === k){
//                     let temp = numbers;
//                     let tempJ = numbers[j];
//                     numbers.splice(i, 1);
//                     let indexJ = numbers.indexOf(tempJ)
//                     numbers.splice(indexJ, 1)
//                     if (solve(k, numbers, memo) === "Yes") {
//                         return "Yes";
//                     } else {
//                         memo[key] = "no";
//                         numbers = temp;
//                     }
//                 }
                
//             }
//         }
//     }
//     return "No";

// }

// console.log(solve(3, [4, 8, 8, 8, 6, 4]))

function getPrimes(n) {
    let fill = []
    for(let i = 2; i < n; i++){
        if(isPrime(i)){
            fill.push(i)
        }
    }
    return fill;
}

function isPrime(n) {
    if (n < 2) return false;
    for (let i = 2; i < n; i++) {
        if (n % i === 0) return false;
    }
    return true;
}

console.log(getPrimes(300))