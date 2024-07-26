// add whatever parameters you deem necessary
function isSubsequence(string1, string2) {
    let start1 = 0
    let start2 = 0;
    if(!string1) return true;
    // while start2 is less than string2
    while (start2 <= string2.length){
        //if string2[start] = string1[start], increase string1[start]
        if(string2[start2] === string1[start1]){
            start1 += 1;
        } 
        //if we reach the end of string1, return true
         if (start1 === string1.length) return true; 
         //after each check, increase start2 by 1
        start2 += 1;
    
    
    }
    return false;
}

isSubsequence('hello', 'hello world'); // true
isSubsequence('sing', 'sting'); // true
isSubsequence('abc', 'abracadabra'); // true
isSubsequence('abc', 'acb'); // false (order matters)