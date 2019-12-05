
// [}] is invalid input {[]} is valid input

var issValid = function (s) {
    // if(s.length % 2 != 0) return false;
    // if(s.length == 0) return true;
    // if (s[0] == '(' && s[s.length - 1] == ')'){ 
    //     return isValid(s.slice(1, s.length - 1))
    // }else if (s[0] == '[' && s[s.length - 1] == ']') {
    //     return isValid(s.slice(1, s.length-1))
    // }else if (s[0] == '{' && s[s.length - 1] == '}'){
    //     return isValid(s.slice(1, s.length - 1))
    // }
    // return false
}
var map = {
    "(": ")",
    "[": "]",
    "{": "}"
}

var isValid = function (s) {
    var stack = [];

    for (var i = 0; i < s.length; i++) {
        var el = s[i];

        if (map[el]) {
            stack.push(map[el]);
        } else {
            if (el !== stack.pop()) {
                return false;
            }
        }
    }

    return stack.length === 0;
};



console.log(isValid("{[({}{}{}[{([]())}])]}"))
