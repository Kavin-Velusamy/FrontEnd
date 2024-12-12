// javascript is a  interperter check in step by step ex const var
// Variable and type compiled language it will take full code

// var- it is declared in anywhere in the function like inside the function or outside where they are declared
// If declared outside of a function, it becomes globally scoped.
// if it inside it is locally scoped



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


// var is function-scoped, meaning if you declare a variable with var 
// inside a function, it will only be accessible within that function and also outside of function.


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

//Function 

// var fname="kavin"
// var age=20
// var ismarried= "single"
// console .log("my name is "+fname + " and the age is "+age)


// var fname="kavin"
// let age=20
// var ismarried= true

// if (ismarried==true){
//     console.log(fname+ "is married");
// }
// if (ismarried ==false){
//     console.log(fname +"is not married");
// }
// else{
//     console.log("give the correct input");
// }



// for loop


// var no=0
// for (var i=0;i<=1000;i+=1){
//     no=(no+i);
// }
// console.log(no);


// array
// even no

// const ages=[1,2,3,7,8]
// for( var i=0;i<=ages.length;i+=1){
//     if( ages[i]%2==0){
//         console.log (ages[i]);
//     }
// }


// biggest no

// const biggno=[12,34,54,23,967,787,98]
// let max=0
// for (var i=1;i<biggno.length;i++){
//     if (biggno[i]>max){
//         max=biggno[i]
//     }
// }
// console.log(max)


// print male passenger

// const passname=["kavin","nivash","priya"];
// const gender=["male","male","female"];
// for( let i=0;i<=passname.length;i++){
//     if (gender[i]=="male"){
//         console.log (passname[i]);
//     }
// }


// reverse all no in array

// let arr=[1,2,3,4,5]
// arr.reverse()
// console.log(arr)



// function sum(a,b){
//     return(a+b)
// }
// const no=sum(3,9)
// console.log(no)







// function sum(num1,num2) {
//     let result=num1+num2
//     return result;
// }
// function Displayresult(data){
//     console.log("Result of the sum is " + data)
// }
// function Displayresultpassive(data){
//     console.log("Sum of result is" +data)
// }
// const ans =sum(5,3)
// Displayresult(ans)



// function calculateArithmetic(a,b, type){
//     if (type =="add"){
//         return a+b;
//     }
//     if (type =="minus"){
//         return a-b;
//     }
// }
// const a=calculateArithmetic(8,5,"minus")
// console.log(a)




// function greek(a,b){
//     console.log("Hi Kavin")
// }
// function greek(a,b){
//     console.log("Hello Kavin")
// }
// setTimeout(greek, 3*1000)



// function greek(a,b){
//         console.log("Hi Kavin")
//     }
//     function greek(a,b){
//         console.log("Hello Kavin")
//     }
// setInterval(greek,3*1000)




// CREATE a count in javascript counts down of 30 to 0
// let count=30;
// let countdown =setInterval(() =>{
//     console.log(count)
//     count--;

    // if (count<0){
    //     clearInterval(countdown);
    //     console.log("count finished")
    // }
// },1000);



// calculate a time that takes between settimeout call and inner function actually running 
// // Record the time before the setTimeout call
// let startTime = Date.now();

// // Schedule the function to run after a specified delay
// setTimeout(() => {
//     // Record the time when the function actually runs
//     let endTime = Date.now();

//     // Calculate the elapsed time
//     let elapsedTime = endTime - startTime;

//     // Log the elapsed time
//     console.log(`Elapsed time: ${elapsedTime} milliseconds`);
// }, 2000); // Adjust this delay as needed



// calculate a terminal clock (hh:mm:ss)
// function updateClock() {
//     const now = new Date();

//     // Extract hours, minutes, and seconds
//     let hours = now.getHours();
//     let minutes = now.getMinutes();
//     let seconds = now.getSeconds();

//     // Pad single digits with a leading zero
//     hours = String(hours).padStart(2, '0');
//     minutes = String(minutes).padStart(2, '0');
//     seconds = String(seconds).padStart(2, '0');

//     // Format the time as hh:mm:ss
//     const timeString = `${hours}:${minutes}:${seconds}`;

//     // Clear the console and log the current time
//     console.clear();
//     console.log(timeString);
// }

// // Update the clock every second
// setInterval(updateClock, 1000);
// updateClock();





// ------------String ------------


// length,indexof,lastindex of str

// function getlength(str){
//     console.log("Original string :",str)
//     console.log("the length",str.length)
// }
// getlength("Helloworld")



// function findIndexOf(str,target){
//     console.log("original :",str);
//     console.log ("Index:",str.indexOf(target));
// }
// findIndexOf("Hello world","world")



// function findIndexOf(str,target){
//     console.log("original :",str);
//     console.log ("Index:",str.lastIndexOf(target));
// }
// findIndexOf("Hello world world world","world")


// slice str

// function getSlice(str,start,end){
//     console.log("original :",str);
//     console.log ("After slice:",str.slice(start,end));
// }
// getSlice("Hello world world world",0,10)


// let ans="Hello Kavin" .slice(0,8)
// console.log(ans)



// sub string

// const value="Hello Kavin" 
// let ans=value.substr(2,5)  // length
// let ans1=value.slice(2,5)
// console.log(ans)
// console.log(ans1)


// replace str

// function  replacestring(str,target,replacement){
//     console.log("Original :",str);
//     console.log("After replace :",str.replace(target,replacement));
// }
// replacestring("Hello World","World","Javascript");



// const str="Hello World"
// console.log(str.replace("World","Javascript"))
 


// split str

// function  splitstring(str,seperator){
//     console.log("Original :",str);
//     console.log("After replace :",str.split(seperator));
// }
// splitstring("Hello Kavin ");

// const split="Hello World"
// console.log(split.split(" "))


// trim

// function  trimString(str){
//         console.log("Original :",str);
//         console.log("After replace :",str.trim());
//     }
// trimString("            Hello Kavin            ");




// tolower

// function  Lower(str){
//     console.log("Original :",str);
//     console.log("After replace :",str.toLowerCase());
// }
// Lower("Hello Kavin");



// toUpper

// function  toUpper(str){
    // console.log("Original :",str);
    // console.log("After replace :",str.toUpperCase());
// }
// toUpper("Hello Kavin");




// /---------Number-------------/ 





// function explainParseInt(value) {
//     console.log("Original Value:", value);
//     let result = parseInt(value);
//     console.log("After parseInt:", result);
//   }
  
//   // Example Usage for parseInt
//   explainParseInt("42");
//   explainParseInt("42px");
//   explainParseInt("3.14");
  


//   function explainParseFloat(value) {
//     console.log("Original Value:", value);
//     let result = parseFloat(value);
//     console.log("After parseFloat:", result);
//   }
  
//   // Example Usage for parseFloat
//   explainParseFloat("3.14");
//   explainParseFloat("42");
//   explainParseFloat("42px");






// /---------Array-------------/ 



// Array handbook

// Array:   push(), pop(), shift(), unshift(), splice(), slice(),
// concat(), forEach(), map(), filter(), reduce(), find(), sort()

// pop() -last, shift() -first: same to remove
// push() -last, unshift()-first,: same to add

// Run each function to see the output, play and learn by doing.



// push()
// function pushExample(arr, element) {
//     console.log("Original Array:", arr);
  
//     arr.push(element);
//     console.log("After push:", arr);
//   }
//   pushExample([1, 2, 3], 4);
// const initialarray=[1,2,3]
// console.log (initialarray.push(4))


// pop()
  // function popExample(arr) {
  //   console.log("Original Array:", arr);
  //   arr.pop();
  //   console.log("After pop:", arr);
  // }
  // popExample([1, 2, 3]);
  




//   // shift()
//   function shiftExample(arr) {
//     console.log("Original Array:", arr);
  
//     arr.shift();
//     console.log("After shift:", arr);
//   }
//   shiftExample([1, 2, 3]);
  




  // unshift()
//   function unshiftExample(arr, element) {
//     console.log("Original Array:", arr);
  
//     arr.unshift(element);
//     console.log("After unshift:", arr);
//   }
//   unshiftExample([1, 2, 3], 0);
  



  // concat()
//   function concatExample(arr1, arr2) {
//     console.log("Original Arrays:", arr1, arr2);
  
//     let arr3 = arr1.concat(arr2);
//     console.log("After concat:", arr3);
//   }
//   concatExample([1, 2, 3], [4, 5, 6]);
  



//   // forEach()
// The callback function takes two parameters: item (the current element) 
// and index (the index of the current element).

  // function forEachExample(arr) {
  //   console.log("Original Array:", arr);
  
  //   arr.forEach(function(item, index) {
  //     console.log(item, index);
  //   });
  // }
  // forEachExample([1, 2, 3]);






//   // map()
//   function mapExample(arr) {
//     console.log("Original Array:", arr);
  
//     let newArr = arr.map(function(item) {
//       return item * 2;
//     });
//     console.log("After map:", newArr);
//   }
//   mapExample([1, 2, 3]);
  


//   // filter()
  // function filterExample(arr) {
  //   console.log("Original Array:", arr);
  
  //   let newArr = arr.filter(function(item) {
  //     return item % 3==0
  //   });
  //   console.log("After filter:", newArr);
  // }
  // filterExample([1, 2, 3, 4, 5 ,6]);
  



//   // find()
  // function findExample(arr) {
  //   console.log("Original Array:", arr);
  
  //   let found = arr.find(function(item) {
  //     return item > 3;
  //   });
  //   console.log("After find:", found);
  // }
  // findExample([1, 2, 3, 4, 5]);
  


  // sort()
//   function sortExample(arr) {
//     console.log("Original Array:", arr);
  
//     arr.sort(function(a, b) {
//       return a - b;
//     });
//     console.log("After sort:", arr);
//   }
//   sortExample([5, 2, 3, 4, 1]);






// class is the blue print


// class Animal {
//     constructor(name, legCount,sound) {
//       this.name = name;
//       this.legCount = legCount;
//       this.sound=sound;
//     }
//     speak(){
//         console.log("Hi there "+this.sound)
//     }
// }
// // Don't do this like
// // let dog1={
// //     name:"dog"
// //     legCount:4
// //     speaks:"bow bow"
// // }
// let dog =new Animal("dog",4,"Bow bow");
// let cat=new Animal("cat",5,"meow meow")
// dog.speak();





// date-time-month etc

// function dateMethods() {
//     const currentDate = new Date();
//     console.log("Current Date:", currentDate);

//     // Getting various components of the date
//     console.log("Date:", currentDate.getDate());
//     console.log("Month:", currentDate.getMonth() + 1); // Months are zero-indexed, so adding 1
//     console.log("Year:", currentDate.getFullYear());
//     console.log("Hours:", currentDate.getHours());
//     console.log("Minutes:", currentDate.getMinutes());
//     console.log("Seconds:", currentDate.getSeconds());
  
//     // Setting components of the date
//     currentDate.setFullYear(2022);
//     console.log("After setFullYear:", currentDate);
  
//     currentDate.setMonth(5); // Setting month to June (zero-indexed)
//     console.log("After setMonth:", currentDate);
  
//     // Getting and setting time in milliseconds since 1970
//     console.log("Time in milliseconds since 1970:", currentDate.getTime());
  
//     const newDate = new Date(2023, 8, 15); // Creating a new date
//     console.log("New Date:", newDate);
//   }

//   // Example Usage for Date Methods
//   dateMethods();




// Json--javascript object notation

// function jsonMethods(jsonString) {
//   console.log("Original JSON String:", jsonString);

//   // Parsing JSON string to JavaScript object
//   let parsedObject = JSON.parse(jsonString);
//   console.log("After JSON.parse():", parsedObject);

//   // Stringifying JavaScript object to JSON string
//   let jsonStringified = JSON.stringify(parsedObject);
//   console.log("After JSON.stringify():", jsonStringified);
// }

// // Example Usage for JSON Methods
// const sampleJSONString =
//   '{"key": "value", "number": 42, "nested": {"nestedKey": "nestedValue"}}';
// jsonMethods(sampleJSONString);




// Math function


// function mathMethods(value) {
//   console.log("Original Value:", value);

//   let rounded = Math.round(value);
//   console.log("After round():", rounded);

//   let ceiling = Math.ceil(value);
//   console.log("After ceil():", ceiling);

//   let flooring = Math.floor(value);
//   console.log("After floor():", flooring);

//   let randomValue = Math.random();
//   console.log("After random():", randomValue);

//   let maxValue = Math.max(5, 10, 15);
//   console.log("After max():", maxValue);

//   let minValue = Math.min(5, 10, 15);
//   console.log("After min():", minValue);

//   let powerOfTwo = Math.pow(value, 2);
//   console.log("After pow():", powerOfTwo);

//   let squareRoot = Math.sqrt(value);
//   console.log("After sqrt():", squareRoot);
// }

// // Example Usage for Math Methods
// mathMethods(4.56);
// mathMethods(9);
// mathMethods(25);




// Objects


// Object Methods Explanation
// function objectMethods(obj) {
//   console.log("Original Object:", obj);

//   let keys = Object.keys(obj);
//   console.log("After Object.keys():", keys);

//   let values = Object.values(obj);
//   console.log("After Object.values():", values);

//   let entries = Object.entries(obj);
//   console.log("After Object.entries():", entries);

//   let hasProp = obj.hasOwnProperty("property");
//   console.log("After hasOwnProperty():", hasProp);

//   let newObj = Object.assign({}, obj, { newProperty: "newValue" });
//   console.log("After Object.assign():", newObj);

// }
// // Example Usage for Object Methods
// const sampleObject = {
//   key1: "value1",
//   key2: "value2",
//   key3: "value3",
// };

// objectMethods(sampleObject);




// loop

// calculate the sum from 0 to 100

// let a=0
// for (let i=0;i<50;i++){
//   // a=a+i
//   console.log(i);
// }
// // console.log(a);



// function

// function findsum(n){
//   let ans=0;
//   for(let i=1;i<n;i++){
//     ans+=i
//   }
//   return ans;
// }
// // let ans=findsum(100)
// // console.log(ans)
// console.log(findsum(100))



// callback function


// function cube(n){
//   return n*n*n
// }
// function sumofcube(a,b){
//   const val1=cube(a)
//   const val2=cube(b)
//   return val1+val2
// }
// console.log(sumofcube(1,2))



// function square(n){
//   return n*n
// }
// function cube(n){
//   return n*n*n
// }
// function sumofsquare(a,b){
//   const val1=square(a);
//   const val2=square(b);
//   return val1+val2;
// }
// function sumofcube(a,b){
//   const val1=cube(a);
//   const val2=cube(b);
//   return val1+val2;
// }
// console.log(sumofsquare(1,2))
// console.log(sumofcube(1,2))


// in above we use same line repeating 763,768
// in below we use someofsomething function to remove repeating line


// function square(n){
//   return n*n
// }
// function cube(n){
//   return n*n*n
// }
// function sumOfSomething(a,b,fn){
//   const val1=fn(a);
//   const val2=fn(b);

//   return val1+val2;
// }
// let ans=sumOfSomething(1,2,square)
// console.log(ans)
// console.log(sumofsomething(1,2,square))




//  sync synchronous function
// together one after the other sequential like cooking ,only one thing is happening at the time

// sync  synchronous function -wait for it to complete before u  can proceed to the next one

// function findsum(n){
//   let ans=0;
//   for(let i=1;i<n;i++){
//     ans +=i; 
//     console.log(i)
//   }
//   return ans;
// }
// let ans=findsum(100)
// console.log(ans)
// // console.log(findsum(100))



// function syncFunction() {
//   console.log("Start");
//   // Simulate a blocking operation
//   for (let i = 0; i < 1000000000; i++) {} // A long loop
//   console.log("End");
// }
// syncFunction();
// console.log("This runs after the function is complete");





  // (Async) Asynchronous function
// u can delegate the work to the other person
// opposite to async -multiple thing happening

// function findsum(n){
//   let ans=0;
//   for(let i=1;i<n;i++){
//     ans +=i; 
//   }
//   return ans;
// }
// function findSumTill100(){
//   console.log(findsum(100))
// }
// // calling a Asynchronous function
// setTimeout(findSumTill100,1000)
// console.log("Hello World")



// function asyncFunction() {
//     console.log("Start");
//     // Simulate an asynchronous operation
//     setTimeout(() => {
//         console.log("This runs after 2 seconds");
//     }, 2000);
//     console.log("End");
// }  
// asyncFunction();
// console.log("This runs immediately after the function call");



// const fs=require("fs");
// fs.readFile("text.txt","utf-8",function(err,data){
//   console.log(data);
// })
// console.log("Hi there")



// const fs = require("fs");
// // my own async function
// function kiratsReadFile(){
//   return new Promise(function(resolve){
//     fs.readFile("text.txt","utf-8",function (err,data){
//       resolve(data)
//     });
//   });
// }
// // Call back function
// function onDone(data){
//   console.log(data)
// }
// kiratsReadFile().then(onDone);



// function kiratsAsyncFunction(callback){
//   setTimeout(callback,2000);
// }
// kiratsAsyncFunction (function(){
//   console.log("Hello")
// });



// callback fn

function kiratsAsyncFunction(callback){
  callback("Hi there")
}
async function main() {
  kiratsAsyncFunction(function(value){
    console.log(value)
  }) 
}
main()





// /Promises (then) 
// If we use promises there is no call backs


// function kiratsAsyncFunction(callback){
//   let p=new Promise(function(resolve){
//     resolve("Hi there")
//   })
// return p;
// }
// function main() {
//   kiratsAsyncFunction().then (function(value){
//     console.log(value)
//   }) 
// }
// main()



// await

// function kiratsAsyncFunction(callback){
//   let p=new Promise(function(resolve){
//   setTimeout(function(){
//     resolve("Hi there")
//   },1000)
// });
// return p;d
// }
// async function main() {
//   //no callback ,no then syntax
//   let value= await kiratsAsyncFunction() //remove await
//     console.log(value)  //then
// }
// main()


































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