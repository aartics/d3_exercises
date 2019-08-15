/*--------------------------------------------*/
/*-------------------Promises-------------------------*/
/*--------------------------------------------*/

// The Promise object represents 
// the eventual completion (or failure) of an asynchronous operation, and its resulting value.

/*--------------------------------------------*/

// What is the difference between these 4 promises?
//

// doSomething().then(function () {
//   return doSomethingElse();
// });

// doSomething().then(function () {
//   doSomethingElse();
// });

// doSomething().then(doSomethingElse());

// doSomething().then(doSomethingElse);

/*--------------------------------------------*/

//Exercise:
// Let’s assume that we have a for loop 
// that prints 0 to 10 at random intervals (0 to 10 seconds). 
// We need to modify it using promises to print sequentially 0 to 10. 
// For example, if 0 takes 6 seconds to print and 1 takes two seconds to print, 
// then 1 should wait for 0 to print and so on.
// Hint: Use for loop to chain promises :).
// -- this is the function to modify: --
// const funk = function() {
//     for (let i = 0; i < 10; i++) {
//         var randomTime = Math.round(Math.random() * 10000)
//         setTimeout(function() {
//             console.log(i);
//         }, randomTime);
//     }
// }


// const myFunk = function() {
//     let resolvedPromise = Promise.resolve();

//     for (let i = 0; i < 10; i++) {
//         resolvedPromise = resolvedPromise.then(function() {
//             return new Promise(function(resolve) {
//                 setTimeout(function() {
//                     console.log(i);
//                     resolve();
//                 }, Math.round(Math.random() * 1000))  
//             })
//         })
//     }
// }

// myFunk();

/*--------------------------------------------*/

//Exercise:
//Write two functions that use Promises that you can chain! 
//The first function, makeAllCaps(), will take in an array 
//of words and capitalize them, and then the second function, 
//sortWords(), will sort the words in alphabetical order. 
//If the array contains anything but strings, 
//it should throw an error.

// const makeAllCaps = (array) => {

//     return new Promise((resolve, reject) => {
        
//         if(array instanceof Array) {
//             let capsArray = array.map(word => {
//                 if(typeof word === 'string') {
//                     return word.toUpperCase()
//                 } else {
//                     reject('Error, not string')
//                 }
//             });
//             resolve(capsArray);
//         } else {
//             reject('not an array')
//         }
//     })
// }

// const sortWords = (array) => {
//     return new Promise((resolve, reject) => {
//         if(array) {
//             resolve(array.sort());
//         } else {
//             reject('some error');
//         }
//     })
// }

// let test1 = ['promise', 'function', 'javascript', 'Tom', 'je56', 'aarti'];
// let test2 = [3, 'juice', 'curry'];
// let test3 = 'o';

// makeAllCaps(test1)

// .then(function(data) {
//     return sortWords(data);
// })

// .then(function(data) {
//     console.log(data);
// })

// .catch(function(error) {
//     console.log(error);
// })

/*--------------------------------------------*/

// Exercise: In this code, your function receives a parameter data. 
// You must modify the code below based on the following rules:

// Your function must always return a promise
// If data is not a number, return a promise rejected instantly and give the data "error" (in a string)
// If data is an odd number, return a promise resolved 1 second later and give the data "odd" (in a string)
// If data is an even number, return a promise rejected 2 seconds later and give the data "even" (in a string)

// function job(data) {
//     return new Promise(function(resolve, reject) {
//         if (isNaN(data)) {
//             reject('error');
//         } 
        
//         if (data % 2 === 1) {
//             setTimeout(function() {
//                 resolve('odd')
//             }, 1000);
//         } else {
//             setTimeout(function() {
//                 reject('even')
//             }, 2000);   
//         }
//     })
// }

// job('blah')
// .then(function(data) {
//     console.log(data)
// })
// .catch(function(error) {
//     console.log(error)
// })

// job(1)
// .then(function(data) {
//     console.log(data)
// })
// .catch(function(error) {
//     console.log(error)
// })

// job(2)
// .then(function(data) {
//     console.log(data)
// })
// .catch(function(error) {
//     console.log(error)
// })

/*--------------------------------------------*/

/* CODE SOLUTION FOR THIS PROBLEM

https://www.codingame.com/playgrounds/347/javascript-promises-mastering-the-asynchronous/the-last-challenge
*/

/*

let central = require('./central'),
    db1 = require('./db1'),
    db2 = require('./db2'),
    db3 = require('./db3'),
    vault = require('./vault'),
    mark = require('./mark');

module.exports = function(id) {
    let dbs = {
        db1: db1,
        db2: db2,
        db3: db3
    };
    
    return new Promise(function(resolve, reject) {
        Promise.all([
            central(id)
            .catch(function() {
                return Promise.reject('Error central');
            })
            .then(function(db) {
                return dbs[db](id)
                .catch(function() {
                    return Promise.reject('Error ' + db);
                });
            }),
            
            vault(id)
            .catch(function() {
                return Promise.reject('Error vault');
            })
        ])
        
        .then(function(data) {
            mark(id)
                .catch(function(error) {
                    return Promise.reject(error);
                });
                
            resolve({
                id: id,
                username: data[0].username,
                country: data[0].country,
                firstname: data[1].firstname,
                lastname: data[1].lastname,
                email: data[1].email
            });
                
        })
        
        .catch(function(error) {
            reject(error);
        })
    });
};
            
*/


/*--------------------------------------------*/


//1. What will be the output of this?

// function job() {
//     return new Promise(function(resolve, reject) {
//         reject();
//     });
// }

// let promise = job();

// promise

// .then(function() {
//     console.log('Success 1');
// })

// .then(function() {
//     console.log('Success 2');
// })

// .then(function() {
//     console.log('Success 3');
// })

// .catch(function() {
//     console.log('Error 1');
// })

// .then(function() {
//     console.log('Success 4');
// });


/*--------------------------------------------*/

//2. What will be the output of this?

// function job(state) {
//     return new Promise(function(resolve, reject) {
//         if (state) {
//             resolve('success');
//         } else {
//             reject('error');
//         }
//     });
// }

// let promise = job(true);

// promise

// .then(function(data) {
//     console.log(data);

//     return job(false);
// })

// .catch(function(error) {
//     console.log(error);

//     return 'Error caught';
// })

// .then(function(data) {
//     console.log(data);

//     return job(true);
// })

// .catch(function(error) {
//     console.log(error);
// });


/*--------------------------------------------*/

//3. What will be the output of this?

// function job(state) {
//     return new Promise(function(resolve, reject) {
//         if (state) {
//             resolve('success');
//         } else {
//             reject('error');
//         }
//     });
// }

// let promise = job(true);

// promise

// .then(function(data) {
//     console.log(data);

//     return job(true);
// })

// .then(function(data) {
//     if (data !== 'victory') {
//         throw 'Defeat';
//     }

//     return job(true);
// })

// .then(function(data) {
//     console.log(data);
// })

// .catch(function(error) {
//     console.log(error);

//     return job(false);
// })

// .then(function(data) {
//     console.log(data);

//     return job(true);
// })

// .catch(function(error) {
//     console.log(error);

//     return 'Error caught';
// })

// .then(function(data) {
//     console.log(data);

//     return new Error('test');
// })

// .then(function(data) {
//     console.log('Success:', data.message);
// })

// .catch(function(data) {
//     console.log('Error:', data.message);
// });


/*--------------------------------------------*/
/*----- Promise.all examples -------*/

/*
Promise.all returns a promise. fail fast behavior. if anything
fails, it only returns the data from reject.
The received data is an array containing 
the data of each given promise.
if you want to start multiple asynchronous jobs at once and 
you want results even if a job is rejected, just use catch
*/

//1. What will be the result here?

// function job(delay) {
//     return new Promise(function(resolve) {
//         setTimeout(function() {
//             console.log('Resolving', delay);
//             resolve('done ' + delay);
//         }, delay);
//     });
// }

// var promise = Promise.all([job(1000), job(2000), job(500), job(1500)]);

// promise.then(function(data) {
//     console.log('All done');
//     data.forEach(function(text) {
//         console.log(text);
//     });
// });


/*--------------------------------------------*/

//2. What will be the result here?

// let p1 = new Promise(function(resolve, reject) {
//     setTimeout(resolve, 500, 'p1');
// });

// let p2 = new Promise(function(resolve, reject) {
//     setTimeout(resolve, 1000, 'p2');
// });

// let p3 = new Promise(function(resolve, reject) {
//     setTimeout(resolve, 1200, 'p3');
// });

// let p4 = new Promise(function(resolve, reject) {
//     setTimeout(reject, 300, 'p4');
// });

// let p5 = new Promise(function(resolve, reject) {
//     setTimeout(resolve, 800, 'p5');
// });

// let promise = Promise.all([p1, p2, p3, p4, p5]);

// promise

// .then(function(data) {
//     data.forEach(function(data) {
//         cconsole.log(data);
//     });
// })

// .catch(function(error) {
//     console.error('error', error);
// });


/*--------------------------------------------*/

//3. What will be the result here?

// let p1 = new Promise(function(resolve, reject) {
//     setTimeout(resolve, 500, 'p1');
// });

// let p2 = new Promise(function(resolve, reject) {
//     setTimeout(resolve, 1000, 'p2');
// });

// let p3 = new Promise(function(resolve, reject) {
//     setTimeout(resolve, 1200, 'p3');
// });

// let p4 = new Promise(function(resolve, reject) {
//     setTimeout(reject, 300, 'p4');
// });

// let p5 = new Promise(function(resolve, reject) {
//     setTimeout(resolve, 800, 'p5');
// });

// let promise = Promise.all([p1.catch(function() {}), p2.catch(function() {}), p3.catch(function() {}), p4.catch(function() {}), p5.catch(function() {})]);

// promise

// .then(function(data) {
//     data.forEach(function(data) {
//         console.log(data);
//     });
// })

// .catch(function(error) {
//     console.error('error', error);
// });


/*--------------------------------------------*/

//4. What will be order of execution here?
// const wait = time => new Promise(
//   res => setTimeout(() => res(), time)
// );

// wait(200)
//   // onFulfilled() can return a new promise, `x`
//   .then(() => new Promise(res => res('foo')))
//   // the next promise will assume the state of `x`
//   .then(a => a)
//   // Above we returned the unwrapped value of `x`
//   // so `.then()` above returns a fulfilled promise
//   // with that value:
//   .then(b => console.log(b)) // 'foo'
//   // Note that `null` is a valid promise value:
//   .then(() => null)
//   .then(c => console.log(c)) // null
//   // The following error is not reported yet:
//   .then(() => {throw new Error('foo');})
//   // Instead, the returned promise is rejected
//   // with the error as the reason:
//   .then(
//     // Nothing is logged here due to the error above:
//     d => console.log(`d: ${ d }`),
//     // Now we handle the error (rejection reason)
//     e => console.log(e)) // [Error: foo]
//   // With the previous exception handled, we can continue:
//   .then(f => console.log(`f: ${ f }`)) // f: undefined
//   // The following doesn't log. e was already handled,
//   // so this handler doesn't get called:
//   .catch(e => console.log(e))
//   .then(() => { throw new Error('bar'); })
//   // When a promise is rejected, success handlers get skipped.
//   // Nothing logs here because of the 'bar' exception:
//   .then(g => console.log(`g: ${ g }`))
//   .catch(h => console.log(h)) // [Error: bar]
// ;

/*--------Promise.race examples -----------*/

// Promise.race takes an array of promises. 
// The result is a new promise that resolves 
// or rejects as soon as one of the promises 
// in the given array resolves or rejects.

// What will be the output here?

// function delay(time) {
//     return new Promise(function(resolve) {
//         setTimeout(resolve, time, 'success ' + time);
//     });
// }

// Promise.race([delay(500), delay(100)]).then(function(data) {
//     console.log(data);
// });

// Promise.race is good for setting a timeout:
// Promise.race([
//   new Promise(function (resolve, reject) {
//     setTimeout(reject, 10000); // timeout after 10 secs
//   }),
//   doSomethingThatMayTakeAwhile()
// ]);


/*--------------------------------------------*/