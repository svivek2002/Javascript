const user = {
    username : "vivek",
    price : 3999,
    
    welcomeMessage : function(){
        console.log(`${this.username}, welcome to the website`);
        // this keyword refers to the current context
        console.log(this); // output the current object contents
    }
}
// user.welcomeMessage()
// user.username = "sam" // sam will be the username for this context
// user.welcomeMessage()


// *******    Important    ********
// console.log(this); // current context empty {} as we are in node env. and there is no context in the global
                   // but if you run this in browser, this (global object in browser) will be the window object

// const chai = function(){
//     let username = "vivek"
// In normal functions, a this variable is created which references the  
// objects that call them.
//     console.log(this); 
//     console.log(this.username); // undefined, as this will only work in objects and not in functions
// }
// chai()

// arrow function
const chai = () => {
    let username = "vivek"
    console.log(this); //  Since chai is an arrow function, it doesn't create its own this variable
    console.log(this.username); // undefined, as this will only work in objects and not in functions
}
chai()

// function print(){
//     console.log(arguments); 
// }
// print(1,false,"hello") // [Arguments] { '0': 1, '1': false, '2': 'hello' }

// const print = () =>{
//     console.log(arguments); // there is no argument object in arrow function
// }
// print(1,false,"hello")

const addTwo = (num1,num2) => { 
    return num1 + num2 // return is mandatory if {} are used
}
console.log(addTwo(3,6))

// implicit return 

// const addTwoOneLiner = (num1,num2) => (num1 + num2) // parenthesis are important for return if you want to return objects, see below 
// const addTwoOneLiner = (num1,num2) => ({username : "vivek"})
console.log(addTwoOneLiner(5,5));