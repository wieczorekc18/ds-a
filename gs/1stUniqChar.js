
/*

Given a string, find the first non-repeating character in it 
and return it's index. 

If it doesn't exist, return -1.

Examples:

s = "leetcode"
return 0.

s = "loveleetcode",
return 2.
Note: You may assume the string contain only lowercase letters.

*/

var firstUniqueChar = function(s) {
    let current
    let appears
    for(let i = 0; i < s.length; i++){
        current = s[i]
        appears = false
        for(let j = 0; j < s.length; j++){
            if(j !== i){
                if(s[i] == s[j]){
                    appears = true;
                    j = s.length
                }
            }
        }
        if(!appears){
            return i;
        }

    }
    return -1;
};

var firstUniqChar = function(s) {
    let obj = {}
    for(let i = 0; i < s.length; i++){
        if(!obj[s[i]]){
            obj[s[i]] = 1
        }else{
            obj[s[i]] += 1
        }
    }
    for(let j = 0; j < s.length; j++){
        if(obj[s[j]] == 1){
            return j;
        }
    }
    return -1
};

let string = "lllllllllloveleetcode"
console.log(firstUniqChar(string))
