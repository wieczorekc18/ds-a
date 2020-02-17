/*

Given a string, recursively remove adjacent duplicate characters from the string. 
The output string should not have any adjacent duplicates. 

See following examples.

Examples:

Input: azxxzy
Output: ay
First “azxxzy” is reduced to “azzy”.
The string “azzy” contains duplicates,
so it is further reduced to “ay”.

*/










// not completed

function removeAdjDup(string){
    if(string.length <= 1) return string;
    let start = 0;
    let end = 0;
    while(string[start] == string[end]){
        end++;
    }
    let newString = string.slice(end)
    let oldString;
    if(end > 1){
        oldString = "";
    }else{
        oldString = string.slice(start, end)
    }
    return oldString + removeAdjDup(newString)
}

function anyDups(string){
    for(let i = 0; i < string.length; i++){
        if(string[i] === string[i+1]){
            return true
        }
    }
    return false
}

function remove(string){
    while(anyDups(string)){
        string = removeAdjDup(string)
    }
    return string
}

string1 = "geeksforgeeg"
console.log(remove(string1))

string2 = "azxxxzy"
console.log(remove(string2))

string3 = "caaabbbaac"
console.log(remove(string3))

string4 = "gghhg"
console.log(remove(string4))

string5 = "aaaacddddcappp"
console.log(remove(string5))

string6 = "aaaaaaaaaa"
console.log(remove(string6))

string7 = "qpaaaaadaaaaadprq"
console.log(remove(string7))

string8 = "acaaabbbacdddd"
console.log(remove(string8))

string9 = "acbbcddc"
console.log(remove(string9))