## blocking; 
the browser is blocked from continuing to handle user input and perform other tasks until the web app returns control of the processor.
##  Threads
A thread is basically a single process that a program can use to complete tasks
Each thread can only do a single task at once Each task will be run sequentially(按顺序)
Programming languages that can support multiple threads can use multiple cores to complete multiple tasks simultaneously（同时的）
## JavaScript is single-threaded
Even with multiple cores, you could only get it to run tasks on a single thread, called the main thread
## Asynchronous code
browsers allow us to run certain operations asynchronously. Features like Promises allow you to set an operation running (e.g. the fetching of an image from the server), and then wait until the result has returned before running another operation

Modern software design increasingly revolves around using asynchronous programming, to allow programs to do more than one thing at a time

There are two main types of asynchronous code style you'll come across in JavaScript code,` old-style callbacks and newer promise-style code`

## Async callbacks
Async callbacks(回调) are `functions` that are specified as `arguments` when calling a function which will start executing code in the background. When the background code `finishes` running, it `calls the` `callback function` to let you know the work is done, or to let you know that something of interest has happened

An example of an async callback is the second parameter of the addEventListener() method
The first parameter is the type of event to be listened for, and the second parameter is a callback function that is invoked when the event is fired.

btn.addEventListener('click', () => { alert('You clicked me!'); }   );匿名函数

Note that not all callbacks are async — some run synchronously.

## Promises
Promises are the new style of async code that you'll see used in modern Web APIs

fetch('products.json').then(function(response) {
  return response.json();
}).then(function(json) {
  products = json;
  initialize();
}).catch(function(err) {
  console.log('Fetch problem: ' + err.message);
});链式调用匿名函数

Here we see fetch() taking a single parameter — the URL of a resource you want to fetch from the network — and returning a promise. The promise is an object representing the completion or failure of the async operation. It represents an intermediate state(中间态), as it were. In essence（本质上）, it's the browser's way of saying "I promise to get back to you with the answer as soon as I can," hence（因此） the name "promise."
We've then got three further code blocks chained onto the end of the fetch()
Two then() blocks. Both contain a callback function that will run if the previous operation is successful, and each callback receives as input the result of the previous successful operation, so you can go forward and do something else to it. Each .then() block returns another promise, meaning that you can chain multiple .then() blocks onto each other, so multiple asynchronous operations can be made to run in order, one after another.
The catch() block at the end runs if `any` of the .then() blocks fail — in a similar way to synchronous `try...catch` blocks, an error object is made available inside the catch(), which can be used to report the kind of error that has occurred. Note however that synchronous try...catch won't work with promises, although it will work with async/await, as you'll learn later on.

## The event queue
Async operations like promises are put into an event queue, which runs after the main thread has finished processing so that they do not block subsequent(之后的) JavaScript code from running. The queued operations will complete as soon as possible then return their results to the JavaScript environment.

## Promises versus(VS) callbacks
Promises have some similarities to old-style callbacks. They are essentially a returned object to which you attach callback functions, rather than having to pass callbacks into a function.(将对象传给回调函数，而不是调用函数并传入对象作参，Promises更好)
1.You can chain multiple async operations together using multiple .then() operations, passing the result of one into the next one as an input. This is much harder to do with callbacks, which often ends up with a messy "pyramid of doom" (also known as callback hell).
2/Promise callbacks are always called in the strict order they are placed in the event queue.
3.Error handling is much better — all errors are handled by a single .catch() block at the end of the block, rather than being individually handled in each level of the "pyramid".
4.Promises avoid inversion of control, unlike old-style callbacks, which lose full control of how the function will be executed when passing a callback to a third-party library.

For security reasons, you can't fetch() files from your local filesystem (or run other such operations locally


For a long time, the web platform has offered JavaScript programmers a number of functions that allow them to asynchronously execute code after a certain time interval has elapsed, and to repeatedly execute a block of code asynchronously until you tell it to stop.
These functions are:

`setTimeout()`
Execute a specified block of code once after a specified time has elapsed.
`setInterval()`
Execute a specified block of code repeatedly with a fixed time delay between each call.
`requestAnimationFrame()`
The modern version of setInterval(). Executes a specified block of code before the browser next repaints the display, allowing an animation to be run at a suitable framerate regardless of the environment it is being run in.

function sayHi(who) {
  alert(`Hello ${who}!`);
}