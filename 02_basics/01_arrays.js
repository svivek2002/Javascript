/*

# In JavaScript, arrays aren't primitives but are instead Array objects with the following core characteristics:

        * JavaScript arrays are resizable and can contain a mix of different data types. (When those characteristics are undesirable, use typed arrays instead.)

        * JavaScript arrays are not associative arrays and so, array elements cannot be accessed using arbitrary strings as indexes, but must be accessed using non-negative integers (or their respective string form) as indexes.

        * JavaScript array-copy operations create shallow copies. (All standard built-in copy operations with any JavaScript objects create shallow copies, rather than deep copies).

            ** A shallow copy of an object is a copy whose properties share the same references (point to the same underlying values) as those of the source object from which the copy was made. As a result, when you change either the source or the copy, you may also cause the other object to change too. That behavior contrasts with the behavior of a deep copy, in which the source and copy are completely independent.

*/

// ************************************************    Array Declaration   *******************************************************

const fruits = []; // declare empty
fruits.push("banana", "apple", "peach"); // 

const numbers = [1,2,3,4]; // declare and initialise
console.log(`type of numbers : ${typeof numbers} `); // object

const nums = new Array(1,2,3,4); //another way
console.log(`type of nums : ${typeof nums} `); // object



//  ++++++++++++++++++++++++++++++++++++++++++++      Array Methods       +++++++++++++++++++++++++++++++++++++++++++++++++++++

console.log(fruits.length); // 3
console.log(fruits);
console.log(fruits[1]) // this is also valid --> console.log(fruits["1"])
nums.push(5) // insert at last index --> O(1)
nums.unshift(10) // insert at start index and shifts all elements --> O(n)
console.log(nums)
nums.shift() // removes from front and shifts --> O(n)
nums.pop() // removes from end --> O(1)
console.log(nums)

console.log(nums.length)
console.log(nums.includes(9))
console.log(nums.indexOf(2))

const newNums = nums.join('->') // joins elements with separator ->
console.log(`newNums : ${newNums} \n type : ${typeof newNums}`);

// slice and splice

console.log("A " , nums) // A [1,2,3,4]

const myNum1 = nums.slice(1,3) // index 1 and 2 , 3 excluded
console.log(myNum1); // / [2,3] 

console.log("B " ,nums); // B [1,2,3,4] --> slice() doesn't change the original array

const myNum2 = nums.splice(1,3) // indices 1,2 and 3 are included
console.log(myNum2); // [2,3,4]

console.log("C " ,nums); // c [1] --> splice changes the original array

