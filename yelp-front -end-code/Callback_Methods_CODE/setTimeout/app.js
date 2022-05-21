console.log("HELLO!!!...")
setTimeout(() => {
    console.log("...are you still there?")
}, 3000)

console.log("GOODBYE!!")


const id = setInterval(() => {
    console.log(Math.random())
}, 2000);

// clearInterval(id);
setTimeout(() => {
clearInterval(id);
console.log("interval cleared")
}, 3000)