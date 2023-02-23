const prompt = require("prompt-sync")({ sigint: true });
let a = prompt("What's your age")
a = Number.parseInt(a);
if(a > 0)
{
    alert("This is a Valid age");
}
else {
    alert("This is not a Valid age");
}