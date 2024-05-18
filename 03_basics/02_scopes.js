// Note 
//  var has global scope in its child functions
//  let has global scope in its {} 


let a = 200

if(true){
    let a =  20
    console.log(`inner a : ${a}`);
    const b = 20
    // var c = 30
    // c = 30 will also be treated as var c = 30
}

console.log(a) // 300 as a has global scope
// console.log(b) // not accessible - local scope
// console.log(c) // accessible - global scope
// c = 300
// console.log(c) // can be changed, , hence it is not recommended


// nested scopes 

function one(){
    var nam = "shubham" // scope till this function only
    const username = "vivek"

    function two(){
        const website = "youtube"
        console.log(username); // can be accessed
        console.log(nam);
    }
    // console.log(website); // cannot be accessed
    two() // will not be executed as previous line will throw error
}
function one1(){
    
    const username = "vivek"
    function two(){
        var nam = "mohan" // scope till this function only
        const website = "youtube"
        console.log(username); // can be accessed
        
    }
    // console.log(nam); // undefined error as var has scope till its parent funtion only
    // console.log(website); // cannot be accessed
    two() // will not be executed as previous line will throw error
}
one() // both functions will be executed and prints "vivek"
one1()
//  +++++++++++++++++    Hoisting      ++++++++++++++++++++++++++++

// The addone() function is raised/hoisted to the top of the global scope (the scope it is declared in) before the whole code is executed, thereby making it possible to execute the function earlier.
console.log(addOne(5)) // will be executed
function addOne(num){
    return num+1
}

//  All functions and variables in JavaScript are hoisted, but only declared functions can be accessed before initialization.

console.log(addtwo(5)) // will throw error, as addTwo is being accessed before declaration, this will not be hoist in execution context
const addTwo = function(num){
    return num+2
}

// Arrow functions also cannot be accessed before initialization

