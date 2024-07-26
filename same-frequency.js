// add whatever parameters you deem necessary
function sameFrequency(num1, num2) {
    //turn each number into an array of digits
    let arr1 = Array.from(String(num1), Number)
    let arr2 = Array.from(String(num2), Number)
    //if arrays different length, return false
    if(arr1.length != arr2.length){
        return false;
    }

    // count frequencies of arrays
    let arr1Freq = {};
    let arr2Freq = {};
    for(let num of arr1){
        arr1Freq[num] = ++arr1Freq[num] || 1;
    }
    for(let num of arr2){
        arr2Freq[num] = ++arr2Freq[num] || 1;
    }

    //compare frequencies
    for(let val in arr1Freq){
        // if val doesnt exist in arr2, false
        if(arr2Freq[val] === false){
            return false;
        }
        // if freq of val isn't the same, false
        if(arr2Freq[val] !== arr1Freq[val]){
            return false
        }
    }
    return true;
}


sameFrequency(182,281) // true
sameFrequency(34,14) // false
sameFrequency(3589578, 5879385) // true
sameFrequency(22,222) // false
