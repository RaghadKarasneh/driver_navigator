`use strict`

let newArray=[];
function reverse(nums) {
    for (let i = nums.length-1; i >= 0; i--){
        newArray.push(nums[i]);
    } 
}
reverse([8,3,4,8,4,8]);
console.log(newArray);
document.writeln('The old array was: [8,3,4,8,4,8], and the newest one is: <br> <br>')
document.writeln(newArray);


// let newArray1=[];
// function reverse2(num) {
//     for (let i = 1; i <= num.length; i++) {
//         newArray1.push(num[num.length-i]);
        
//     }
//     return newArray1;
// }

// console.log(reverse2([8,3,4,8,4,8]));