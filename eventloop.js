
console.log("start")


document.getElementById("clickMe").addEventListener("click",function cb() {
    console.log('callback function')
    
})

console.log("finish")


// code execution line by line

// in line no 2 js engine connects with the window object from there it connects to our console in browser and log the value we put here.

// in line no 5 our js engine again goes to the window object from there to web api  called dom apis which is document object model of our html code and gives back the object which we asked for with the id attach to it in our case it is a button

// in line no 5 then again a web api named addeventlistener creates a space/register space for our call back function in the wep api environment with the even click attached to it 
// when the user do the event in our case clicks the button the call back function goes to the call queue and then our event loop monitors whether the call stack is empty or not if it is empty our event loop pushes the call back function from the call queue into the call stack for its execution after the execution it vanishes from the call stack as well as from our call queue.

// for line 10 similar to line no 2
