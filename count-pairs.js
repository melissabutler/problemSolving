// add whatever parameters you deem necessary
function countPairs(nums, goal) {
    nums.sort((a,b) => a - b);
    let start = 0;
    let end = nums.length -1;
    let count = 0;

    while (start < end){
        let sum = nums[start] + nums[end];
            if(sum === goal){
                count++;
                start++;
                end--;
            } else if (sum < goal){
                start++;
            } else{
                end--;
            }
    }
        return count;
}


countPairs([3,1,5,4,2], 6) // 2 (1,5 and 2,4)
countPairs([10,4,8,2,6,0], 10) // 3 (2,8, 4,6, 10,0)
countPairs([4,6,2,7], 10) // 1 (4,6)
countPairs([1,2,3,4,5], 10) // 0
countPairs([1,2,3,4,5], -3) // 0
countPairs([0,-4],-4) // 1
countPairs([1,2,3,0,-1,-2],0) // 2