// Question 1
// Using for loop
let marks = {
    pratham: 90,
    ayush: 50,
    ritwik: 60
}

for(i=0;i<Object.keys(marks).length;i++)
{
    console.log("The marks of " + Object.keys(marks)[i] + " are " + marks[Object.keys(marks)[i]])
}

// Now using for in loop

for(let keys in marks)
{
    console.log("The marks of " + keys + "are" + marks[keys])
}

// Third Question
let findno = 10
let k
while(k != findno){
    k = prompt("Enter a number")
}
console.log("Correct answer")