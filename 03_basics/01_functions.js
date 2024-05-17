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

