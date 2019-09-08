/*--------------------------------------------*/
/*-------------------Map, Filter-------------------------*/
/*---------/* valiarr */
// map array in, array out - valiarr
/*--------------------------------------------*/

/*
The map() method is used to apply a function on every element 
in an array. A new array is then returned.

Current Value (val)
Current Index (i)
Source Array (arr)
*/

/*



let newArr = oldArr.map((val, index, arr) => {
  // return element to new Array
});


newArr — the new array that is returned
oldArr — the array to run the map function on
val — the current value being processed
index — the current index of the value being processed
arr — the original array

In this example we have a simple array:

We want to double the even numbers 
and leave the odd numbers the same. 
In order to accomplish this, 
we can add logic within our map() function:

let arr = [1,2,3,4];
let newArr = arr.map((v,i,a) => {
  return v % 2 === 0 ? v * 2 : v;
});
// newArr = [1,4,3,8];


/*--------------------------------------------*/
/*-------------------Reduce-------------------------*/
/*---------/* ACCvaliarr */
// reduce array in, single value out - ACCvaliarr
/*--------------------------------------------*/

/*

The reduce() method executes a reducer function 
(that you provide) on each element of the array, 
resulting in a single output value.

Accumulator (acc) - accumulates the callback's return values
Current Value (val)
Current Index (i)

var sum = [0, 1, 2, 3].reduce(function (accumulator, currentValue) {
  return accumulator + currentValue;
}, 0);
// sum is 6
Source Array (arr)

var initialValue = 0;
var sum = [{x: 1}, {x: 2}, {x: 3}].reduce(function (accumulator, currentValue) {
    return accumulator + currentValue.x;
},initialValue)

console.log(sum) // logs 6

*/

