
setTimeout(() => { console.log("after fetch this will be executed")
    
}, 5000);

fetch("http://127.0.0.1:5500/event.html")//if it completes its promise of giving this url
.then(function(){
    console.log("promise fullfilled by the fetch")
})


// fetch is used to make network call to the external servers .


// as the fetch will be gone into the microtask queue it will be seen first by the event loop can will be pushed into the stack first and get executed.

// where as our timeout call back function will be pushed into the call queue and get executed after the completion of fetch execution as microtask queue has higher priority then the call queue.