'use strict';

function decending(array){
    for (let i = 0; i < array.length; i++) 
        for (let j = i + 1; j < array.length; j++) {  
            let x= 0; // to compare.
            if (array[i] < array[j]) {      //compare outer loop index with inner loop 
                x= array[i];               // if greater than swapping.
                array[i] = array[j];            // Swaping code here.
                array[j] = x;
            }
        }
        return array
    }
   

console.log(decending( [2,9,0,4]));
document.writeln(`
<br>
<br>
The decending sort for the following array [2,9,0,4] is: 
<br>
<br>
`)
document.writeln(decending( [2,9,0,4]));
