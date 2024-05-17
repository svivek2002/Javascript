// const User = new Object() // Singleton object

const User = {} // Non-singleton object

User.name = "Vivek"
User.id = "123abc"
User.isLoggedIn = false

// console.log(User);

const regularUser = {
    email : "vivek@hmail.com",
    fullName:{ // another object
        userFullName:{ // nested objects allowed
            firstName : "Vivek",
            lastName :  "Singh"
        }
    }
}

// console.log(regularUser.fullName.userFullName.firstName); // Vivek
// console.log(regularUser.fullName1?.userFullName.firstName); // Undefined 

//  combining objects
const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}

// const obj3 = Object.assign({},obj1,obj2)
const obj3 = {...obj1, ...obj2} // spread
console.log(obj3);

console.log(Object.keys(User)); // array of keys
console.log(Object.values(User)); // array of values
console.log(Object.entries(User)); // array of [key - values]
console.log(User.hasOwnProperty('isLoggedIn')) // true as isLoggedIn property is present


// ++++++++++++++++++++++++++    object Destructuring       +++++++++++++++++++++++++++++++++++++

const course = {
    price : 999,
    courseInstructor : "hitesh"
}

// course.courseInstructor
const {courseInstructor : instructor} = course

// console.log(courseInstructor);
console.log(instructor);

// In React

// const navbar = ({company}) => { // destructuring

// }
// navbar(company = "hitesh")

// json

// json in form of objects

// {
//     "name" : "vivek",
//     "coursename" : "js in hindi",
//     "price" : "free"
// }

// in form of arrays
 
// [
//     {},
//     {},
//     {}
// ]