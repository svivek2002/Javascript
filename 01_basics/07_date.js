let myDate = new Date()
console.log(myDate.toDateString());
console.log(myDate.toString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleString());
console.log(myDate.toLocaleTimeString());
console.log(myDate.toTimeString());
console.log(myDate.toUTCString());
console.log(myDate.getTimezoneOffset());

let myCreatedDate = new Date(2024,3,21) // month starts from 0 -> 3 means april
console.log(myCreatedDate.toDateString());

let myCreatedDate1 = new Date("21-04-2024") 
console.log(myCreatedDate.toLocaleDateString());

let myTimeStamp = Date.now()

console.log(myCreatedDate)
console.log(myCreatedDate.getTime()); // miliseconds

console.log(Math.floor(Date.now() / 1000)); // msecs into secs

console.log(myDate.toLocaleDateString('default', {
    weekday : "long"
}))




