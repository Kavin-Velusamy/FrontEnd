// javascript is a  interperter check in step by step
// Variable and types

// var- it is declared in anywhere in the function like inside the function or outside where they are declared
// If declared outside of a function, it becomes globally scoped.
// if it inside it is locally scoped
// 


// let-it can be declared inside the function or block where they are declared
// let and const is a temporal dead zone when value is not assigned if u try to access it will show error

// const-const is also hoisted but remains in a "temporal dead zone" until it's assigned.

// var a=10
// var b=20
// console.log(a+b)
// console.log(10+39)

// let a=10
// console.log(a)

// const b=20
// console.log(b)

// 
// var is function-scoped, meaning if you declare a variable with var 
// inside a function, it will only be accessible within that function and outside of function.


// {
//     let b=20 
//     var a=10
//     console.log(a)
//     console.log(b)
// }
// console.log(a)



// let a=10
// a=20
// console.log(a)

// var a=10
// a=20
// console.log(a)

// if it is permanent then we can use constant as const
// const b=10
// a=20
// console.log(b)

// const weekdays=7
// a=10
// console.log(weekdays)


// console.log("Kavin")


// var price=100
// var product="iphone15"
// var tax=20
// console.log(product)
// var total=price+tax
// console.log(total)


// var fruitname="apple"
// var count=5
// var price=120
// var total=count*price
// console.log(total)
// console.log(fruitname)


// Keywords
// var,let,console,if else etc ...we can't use as the variable name

// operator

// var a =10 
// var b=a++
// console.log(b)
// console.log(a)

// var a =10 
// var b=++a
// console.log(b)
// console.log(a)

// datatypes

// console.log(typeof("apple"))


// Function

// function abc(){
//     console.log("Hi Kavin")
// }
// abc()


// var a=10
// var b=20
// function add(){
//     console.log(a+b)
// }
// add()


// var factor="Kamal"
// var fplayer="Dhoni"
// var fmovie="96"

// function favourite(){
//     console.log("favourite actor :",factor)
//     console.log("favourite player :", fplayer)
//     console.log("favourite movie :",fmovie)
// }
// favourite()



// function area(a,b){
//     var a=l*b
//     console.log(a)
// }
// var l=10
// var b=20
// area(l,b)


// return

// function myname(){
//     return"Kavin"
// }
// var a=myname()
// console.log(a)


// if else

// if(false){
//     console.log("Hello I'm kavin")
// }
// else{
//     console.log("I'm Nivash")
// }


// console.log(false&&true&&true)     // 1 false =full false
// console.log(false||false||true)     // 1 true==true


// console.log(!true)


// var color="green"

// if (color=="red"){
//     console.log("stop")
// }
// if (color=="yellow"){
//     console.log("Get ready")
// }
// if (color=="green"){
//     console.log("Go")
// }


// var score=40
// if (score<50){
//     console.log("You need to improve")
// }
// else if (score>50 & score<70){
//     console.log("Good job")
// }
// else if (score>70){
//     console.log("Excellent performance")
// }


// for loop

// for (count=1;count<=5;count=count+1){
//     console.log("Kavin")
// }
// for (count=1;count<=10;count=count+1){
//     console.log(count)
// }
// for (count=1;count<=10;count=count+2){
//     console.log(count)
// }
// for (count=1;count<=10;count=count+1){
//     console.log(count)
// }


// Random Numbers

// var a=Math.random()
// console.log(Math.floor(a*10))

// var a=Math.random()
// console.log(Math.floor(a*10)+1)

// var a=10
// var b=20
// function add(){
//     console.log(a+b)
// }
// add()










// console.log(x)
    // var x=10


// var x=20
// function foo(){
//     console.log(x)
//     var x=10
// }
// foo()


// var x=20
// function foo(){
//     console.log(x)
//     let x=10
// }
// foo()


// function example() {
//     console.log(x); // undefined
//     var x = 10;
//     console.log(x); // 10
// }
// example();


// function example() {
//     if (true) {
//         let x = 10;
//         console.log(x); // 10
//     }
//     // console.log(x); // ReferenceError: x is not defined
// }
// example();



// const x = 10;
// console.log(x); // 10

// // x = 20; // Error: Assignment to constant variable

// const arr = [1, 2, 3];
// arr.push(4); // Allowed, as we're modifying the array, not reassigning the variable
// console.log(arr); // [1, 2, 3, 4]



// process like call back and call stack

// console.log ('start')
// It is a asynchronous function so it will be executed after the other code is executed
// setTimeout(() =>{
//     console.log('Timeout')
// } ,0)
// console.log('End')