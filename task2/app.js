`use strict`

function upperCase(str) {
    let array=str.split(" ");
    let array2=[];
    for (let i = 0; i < array.length; i++) {
        array2.push(array[i].charAt(0).toUpperCase()+array[i].slice(1));
    
    }
 return array2.join(" ")   
}
console.log(upperCase(`the car drove fast`));
document.writeln(`
<br>
<br>
The old straing was: the car drove fast, and the newest one is
<br>
<br>`)
document.writeln(upperCase(`the car drove fast`));
