console.log("the console.log here will go to the window and push /log the value we writting in that console api")

setTimeout(function cb() {

    console.log("callback function.")
    
}, 5000);

console.log("end")







//after our call stack recognizes that it is a settimeout api which allows us to access the browser api it will move out from the call stack and takes a place in the browser with the timer set to it and timer will get started then after the timer goes off our callback function will be first inserted in a call queue from there the event loop will be checking if there is any function is in the call queue and if there is a function present the event loop will be popping it out and pushes it into the call stack where the execution context of that call back function will be creayed and it will be executed in the call stack .

// console->browser->console->log the value

//settimeout->browser->creates a space for the callback function->starts the function timer->timer goes off->browser sends it to the call queue->event loop recognizes the function->  sends ito to call stack->executed .

