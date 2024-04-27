const marvel_heros = ["Thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros) // pushes entire array as a single element at the last index of the original array
// console.log(marvel_heros);

// console.log(marvel_heros[3][1]) // flash 

const combine_heros = marvel_heros.concat(dc_heros) // returns a new array by concatenating two arrays
console.log(combine_heros);

const spread_combine = [...marvel_heros, ...dc_heros] // more used, as more tha two objects can be combined in a single line
console.log(spread_combine);

const confused_array = [1, 2, 3, [4, 5, 6], 7, [8, 9, [10, 11]]]
const flat_array = confused_array.flat(Infinity) // when you don't know depth give infinity
console.log(flat_array);

// creating arrays from given objects
console.log(Array.isArray("Vivek"))
console.log(Array.from("Vivek"))
console.log(Array.from({name: "Vivek"})) // [] --> it expects key - value, otherwise returns empty array

//  Syntax of Array.from()
/*
    Array.from(arrayLike)
    Array.from(arrayLike, mapFn)
    Array.from(arrayLike, mapFn, thisArg)
*/
console.log(Array.from([1,2,3] , (x) => x + x)); // [2,4,6]

const score1 = 100
const score2 = 200
const score3 = 300

console.log(Array.of(score1,score2,score3))