// Sum of all Laps

// let lap1 = 34
// let lap2 = 33
// let lap3 = 36

// function SUM(){
//     let sum = lap1 + lap2 + lap3;
//     console.log(sum);
// }
// SUM()


let countEl = document.getElementById('count-el');

console.log(countEl);

let count = 0

function increment(){
    count = count + 1;
    countEl.innerText = count
}