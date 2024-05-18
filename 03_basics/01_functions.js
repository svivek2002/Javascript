function printMyName(){
    console.log("VIVEK");
}

printMyName // reference of function only
printMyName() // execution of function

// function without return type

// function addTwoNumbers(num1, num2){ 
//     console.log(num1 + num2);
// }

// addTwoNumbers(3,4);

// function with return type

function addTwoNumbers(num1, num2){ 
    return num1 + num2;
}

result = addTwoNumbers(3,4);
console.log(result);

function loginUserMessage(username = "sam"){ // sam is the default parameter, if block will never execute
    if(username === undefined){ // or (!username)
        console.log("please enter a username");
        return;
    }
    return `${username} just logged in`
}

console.log(loginUserMessage("Vivek"));
// console.log(loginUserMessage()); // undefined argument, so if block will execute 
console.log(loginUserMessage()); // undefined argument, so default parameter will be used

// function with not predefined number of parameters

// ... is the rest and spread operator, they differ not in their usecases

function calculateCartPrice(...price1){  // ... here is the rest operator
    return price1
}

function calculateCartPrice1(num1, num2, ...price1){  // ... here is the rest operator
    return price1
}

console.log(calculateCartPrice(200,400,500));
console.log(calculateCartPrice1(200,500,600,1000)); // [ 600, 1000 ]

// objects in functions

const user = {
    username : "vivek",
    branch : "cse"
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and branch is ${anyobject.branch}`);
}

handleObject(user)
// or you can directly pass objects in function as arguments

handleObject({
    username : "singh",
    branch : "ECE"
})

// arrays in functions

const myNewAArray = ['hero','villain','heroine','gangster']

function handleArray(anyArray){
    console.log(anyArray);
}
// handleArray(myNewAArray)
// can directly pass array as function arguments
handleArray(['hero','villain','heroine','gangster'])

