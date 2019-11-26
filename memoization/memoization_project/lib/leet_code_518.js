// Work through this problem on https://leetcode.com/problems/coin-change-2/ and use the specs given there.
// Feel free to use this file for scratch work.

function change(amount, coins, memo = {}) {
    let key = amount + "-" + coins;
    if(key in memo) return memo[key];
    if(amount === 0) return 1;
    let currentCoin = coins[coins.length - 1]; // select last coin from coin array
    let ways = 0
    // iterate over number of possible times you can take the current coin eg. 0, 1, 2, 3 times ect
    for (let i = 0; i*currentCoin <= amount; i++){
        ways += change(amount - i * currentCoin, coins.slice(0, -1), memo);
    }
    memo[key] = ways;
    return memo[key];
};

console.log(change(500, [3, 5, 7, 8, 9, 10, 11]))


// let key = amount + "-" + coins;
// if (key in memo) return memo[key]
// if (amount === 0) return 1;

// let currentCoin = coins[coins.length - 1];
// let ways = 0;
// for (let i = 0; i * currentCoin <= amount; i++) {
//     ways += change(amount - i * currentCoin, coins.slice(0, -1), memo);
// }
// memo[key] = ways;
// return memo[key];