

var romanToInt = function (s) {
    let hash = {};
    hash['I'] = 1;
    hash['V'] = 5;
    hash['X'] = 10;
    hash['L'] = 50;
    hash['C'] = 100;
    hash['D'] = 500;
    hash['M'] = 1000;
    let sum = 0
    for (let i = 0; i < s.length; i++) {
        if (s[i + 1] && hash[s[i]] < hash[s[i + 1]]) {
            sum += (hash[s[i + 1]]) - (hash[s[i]]);
            i++
        } else {
            sum += hash[s[i]]
        }
    }
    return sum
}

console.log(romanToInt("XXIV"))
console.log(romanToInt("XXIV"))
console.log(romanToInt("XXIV"))
console.log(romanToInt("XXIV"))
console.log(romanToInt("XXIV"))
