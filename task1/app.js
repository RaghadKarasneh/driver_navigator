`use strict`

let newArray=[];
function reverse(nums) {
    for (let i = nums.length-1; i >= 0; i--){
        newArray.push(nums[i]);
    } 
}
reverse([8,3,4,8,4,8]);
console.log(newArray);