// add whatever parameters you deem necessary
function separatePositive(arr) {
    let start = 0
    let end = arr.length - 1;

    while(start < end){
        // if start is negative and end is not
        if(arr[start] < 0 && arr[end] > 0) {
            //swap start and end, 
            let temp = arr[start];
            arr[start] = arr[end];
            arr[end] = temp;
            // then step back/forward for start/end
            start += 1;
            end += 1;
        } else {
            //otherwise, if start is greater than zero, step forward
            if(arr[start] > 0) start += 1;
            // or step end backward;
            else end -= 1;
        }
    }

    return arr;

}

separatePositive([2, -1, -3, 6, -8, 10]) // [2, 10, 6, -3, -1, -8]
separatePositive([5, 10, -15, 20, 25]) // [5, 10, 25, 20, -15]
separatePositive([-5, 5]) // [5, -5]
separatePositive([1, 2, 3]) // [1, 2, 3]