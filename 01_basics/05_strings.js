const name = "vivek"
const repoCount = 6

console.log(name + "'s repocount : " + repoCount ) // this is outdated

// nowadays string interpolation are used 
// convenient way
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('vivek Singh') // present at key value pair and various of strings are present
console.log(typeof gameName); // object
console.log(gameName.charAt(0)); // v  or console.log(gameName[0])
console.log(gameName.__proto__);
console.log(gameName.toUpperCase());
// console.log(gameName.indexOf('s')); // -1 as it's not present
console.log(gameName.indexOf('S'));

const newString = gameName.substring(0,5) // 5th is not included
console.log(newString);

const newString1 = gameName.substring(-11,5) // reverse
console.log(newString);

const newString2 = "    vivek     "
console.log(newString2);
console.log(newString2.trim()); // trim the white spaces from both sides
console.log(newString2.trimStart); // trim only from start. trimEnd() also available

const url = "https://vivek.com/vivek%30singh" 

console.log(url.replace('%30','-'))
console.log(url.includes('abcd'));
console.log(gameName.split(' ')) // splits vivek and singh as they are seperated by spaces