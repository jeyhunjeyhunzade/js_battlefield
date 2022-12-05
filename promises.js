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


// 1. Need a way to pass arguments to callback and return result without actually returning in object creation paramter.
// 2. Here (arg) => {this.values.resolved = arg} is not callback, but an argument passed to callback
function Prom(callback) {
    this.values = {resolved: null, rejected:null}
    const resolve = (arg) => {this.values.resolved = arg}
    const reject = (arg) => {this.values.resolved = arg}
    this.then = () => {
        callback(resolve, reject);
        return  new CustomPromise(this.values);
    }
 }
 
 const a = new Prom((resolve) => { 
     resolve(" HELLOOOO!")
 })

 console.log(a.then());




//  Here’s a simple code example where the Promise.all method consumes getFrogs and getLizards, 
//  which are promises. It retrieves the results as an array inside the .then handler before storing them into the local storage
 const getFrogs = new Promise((resolve) => {
    resolve([
      { id: 'mlo29naz', name: 'larry', born: '2016-02-22' },
      { id: 'lp2qmsmw', name: 'sally', born: '2018-09-13' },
    ])
  })
  
  const getLizards = new Promise((resolve) => {
    resolve([
      { id: 'aom39d', name: 'john', born: '2017-08-11' },
      { id: '20fja93', name: 'chris', born: '2017-01-30' },
    ])
  })
  
  function addToStorage(item) {
    if (item) {
      let prevItems = localStorage.getItem('items')
      
      if (typeof prevItems === 'string') {
        prevItems = JSON.parse(prevItems)
      } else {
        prevItems = []
      }
      
      const newItems = [...prevItems, item]
      localStorage.setItem('items', JSON.stringify(newItems))
    }
  }
  
  let allItems = []
  
  Promise.all([getFrogs, getLizards])
    .then(([frogs, lizards]) => {
      localStorage.clear()
      
      frogs.forEach((frog) => {
        allItems.push(frog)
      })
      
      lizards.forEach((lizard) => {
        allItems.push(lizard)
      })
      
      allItems.forEach((item) => {
        addToStorage(item)
      })
    })
    .catch((error) => {
      console.error(error)
    })
    
  console.log(localStorage.getItem('items'))
  /*
    result:
      [{"id":"mlo29naz","name":"larry","born":"2016-02-22"},{"id":"lp2qmsmw","name":"sally","born":"2018-09-13"},{"id":"aom39d","name":"john","born":"2017-08-11"},{"id":"20fja93","name":"chris","born":"2017-01-30"}]
  */
   
//Promise.allSettled
const add = (num1, num2) => new Promise((resolve) => resolve(num1 + num2))

const multiply1 = (num1, num2) => new Promise((resolve) => resolve(num1 * num2))

const fail1 = (num1) =>
  new Promise((resolve, reject) =>
    setTimeout(() => reject(new Error('You, my friend, were too late')), 200),
  )
  
const fail2 = (num1) =>
  new Promise((resolve, reject) =>
    setTimeout(
      () => reject(new Error('Being late is never a good habit')),
      100,
    ),
  )
  
const promises1 = [add(2, 4), multiply1(5, 5), fail1('hi'), fail2('hello')]

Promise.allSettled(promises)
  .then((result) => {
    console.log(result)
  })
  .catch((error) => {
    console.error(error)
  })


//Promise.any
const multiply = (num1, num2) => new Promise((resolve) => resolve(num1 * num2))

const fail = (num1) =>
  new Promise((resolve, reject) =>
    setTimeout(() => reject(new Error('You, my friend, were too late')), 200),
  )
  
const promises2 = [
  fail(2),
  fail(),
  fail(),
  multiply(2, 2),
  fail(2),
  fail(2),
  fail(2, 2),
  fail(29892),
  fail(2),
  fail(2, 2),
  fail('hello'),
  fail(2),
  fail(2),
  fail(1),
  fail(),
]

Promise.any(promises2)
  .then((result) => {
    console.log(result) // result: 4
  })
  .catch((error) => {
    console.error(error)
  })



  // Promise.finally() - This lets you avoid duplicating code in both the promise's then() and catch() handlers.
  function checkMail() {
    return new Promise((resolve, reject) => {
      if (Math.random() > 0.5) {
        resolve('Mail has arrived');
      } else {
        reject(new Error('Failed to arrive'));
      }
    });
  }
  
  checkMail()
    .then((mail) => {
      console.log(mail);
    })
    .catch((err) => {
      console.error(err);
    })
    .finally(() => {
      console.log('Experiment completed');
    });