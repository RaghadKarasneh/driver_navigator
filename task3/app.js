'use strict';

function palindrome (string){
    let array=string.split('');
    console.log(array);

    for (let i=1;i<array.length/2;i++){
        if(array[0]!=(array[array.length-1])){
            return false;
        }
        else if(array[i]!=(array[array.length-1-i])){
                return false
            }
            else return true
    }
    return true
}
console.log(palindrome('ABCDCBA'));
document.writeln(`
<br>
<br>
Let's check if the given string (ABCDCBA) is a palindrome or not.
<br>
<br>
`)
document.writeln('The result is: ');
document.writeln(palindrome('ABCDCBA'))