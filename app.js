// RANDOM NUMBER GENERATOR 

const myButton = document.getElementById("myButton");
const Label1 = document.getElementById("Label1");
const Label2 = document.getElementById("Label2");
const Label3 = document.getElementById("Label3");
const min = 1;
const max = 6;
let randomNum1;
let randomNum2;
let randomNum3;



myButton.onclick = function (){
    randomNum1 = Math.floor(Math.random() * max) + min;
    randomNum2 = Math.floor(Math.random() * max) + min;
    randomNum3 = Math.floor(Math.random() * max) + min;
    Label1.textContent = `Number one is ${randomNum1}`;
    Label2.textContent = `Number two is ${randomNum2}`;
    Label3.textContent = `Number three is ${randomNum3}`;
}

console.log(sum, typeof sum)



