const wait1 = time => new Promise((resolve) => setTimeout(resolve, time));

wait(3000).then(() => console.log('Hello!')); // 'Hello!'

// A pending promise may transition into a fulfilled or rejected state.

// A fulfilled or rejected promise is settled, and must not transition into any other state.
// Once a promise is settled, it must have a value (which may be undefined). That value must not change.


/*
promise.then(
    onFulfilled?: Function,
    onRejected?: Function
) => Promise
*/

// If the arguments supplied are not functions, they must be ignored.
// onFulfilled() will be called after the promise is fulfilled, with the promise’s value as the first argument
// .then() must return a new promise, promise2.

// But what happens if handleSuccess() throws an error? The promise returned from .then() will be rejected, 
// but there’s nothing there to catch the rejection — meaning that an error in your app gets swallowed. Oops!
save().then(
    handleSuccess,
    handleError
);
  
// .catch() will handle rejections from either save(), or handleSuccess()
save()
  .then(handleSuccess)
  .catch(handleError)
;

// save() error might be a networking error, whereas the handleSuccess() error may be because the developer forgot to handle a specific status code. 
// What if you want to handle them differently? You could opt to handle them both
save()
  .then(
    handleSuccess,
    handleNetworkError
  )
  .catch(handleProgrammerError)
;

// ending all promise chains with a .catch() is recommended


const wait2 = (
    time,
    cancel = Promise.reject()
  ) => new Promise((resolve, reject) => {
    const timer = setTimeout(resolve, time);
    const noop = () => {};
  
    cancel.then(() => {
      clearTimeout(timer);
      reject(new Error('Cancelled'));
    }, noop);
  });
  
  const shouldCancel = Promise.resolve(); // Yes, cancel
  // const shouldCancel = Promise.reject(); // No cancel
  
  wait2(2000, shouldCancel).then(
    () => console.log('Hello!'),
    (e) => console.log(e) // [Error: Cancelled]
  ); 


//   Promise.race() takes an array (or any iterable) and returns a promise that resolves with the value of the first resolved promise in the iterable, 
//   or rejects with the reason of the first promise that rejects.

//   Promise.all() takes an array (or any iterable) and returns a promise that resolves when all of the promises in the iterable argument have resolved, 
//   or rejects with the reason of the first passed promise that rejects.