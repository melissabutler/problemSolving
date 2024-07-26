// add whatever parameters you deem necessary
function constructNote(msg, letters) {
    if(letters.length < msg.length){
        return false;
    }

    let msgFreq = createFrequencyCounter(msg);
    let lettersFreq = createFrequencyCounter(letters);

    for(let char in msgFreq){
        console.log(msgFreq[char])
        if(!lettersFreq[char]){
            return false;
        }

        if(msgFreq[char] > lettersFreq[char]){
            return false
        }
       
    }
    return true;
}

function createFrequencyCounter(array) {
    let frequencies = {};
  
    for (let val of array) {
      let valCount = frequencies[val] || 0;
      frequencies[val] = valCount + 1;
    }
  
    return frequencies;
  }
  
  constructNote('aa', 'abc') // false
  constructNote('abc', 'dcba') // true
  constructNote('aabbcc', 'bcabcaddff') // true