### Conceptual Exercise

Answer the following questions below:

- What are some ways of managing asynchronous code in JavaScript?
Callbacks, Promises, Async functions, ReactiveX
- What is a Promise?
A promise is an object that contains the async operation result or error
- What are the differences between an async function and a regular function?
An async function can pause the execution of a function while that doesnt happen with a regular function
- What is the difference between Node.js and Express.js?
Node is a run-time environment for building server-side event-driven using javascript while express is a framework based on node for building web-application using principles and approaches of node
- What is the error-first callback pattern?
It's the passing of an error object as the first argument toa callback function
- What is middleware?
Layer that exists between the application compnents, tools, and devices
- What does the `next` function do?
It excutes the middleare succeeding the currnt middleware
- What are some issues with the following code? (consider all aspects: performance, structure, naming, etc)

```js
async function getUsers() {
  const elie = await $.getJSON('https://api.github.com/users/elie');
  const joel = await $.getJSON('https://api.github.com/users/joelburton');
  const matt = await $.getJSON('https://api.github.com/users/mmmaaatttttt');

  return [elie, matt, joel];
}
```
