//1) function greet name
// function greet(L4CG4){
//     console.log("Hello " + L4CG4 + ":) ");
// }
// let L4CG4 = prompt("Enter a name: ");
// greet(L4CG4);

// // 2) add two number
// // decalring a function
// function add(a, b){
//     return a + b;
// }
// //take input from the user
// let number1 = parseFloat(prompt("Enter first number: "));
// let number2 = parseFloat(prompt("Enter second number: "));

// // calling function
// let result = add(number1, number2);

// //display the result
// console.log("The sum is " + result);

//4)

// function myFunction(p1,p2){
//     return p1 * p2
// }
// document.getElementById("demo").innerHTML = myFunction(4,3);

// var x = myFunction(4,3)
// function myFunction(p1,p2){
//     return p1 * p2
// }
// document.getElementById("demo").innerHTML = x;

// hello = () => "Hello World!";
// document.getElementById("demo").innerHTML = hello();

// anonymous function

// var greet = function(platform){
//     console.log("Welcome to " , platform);
// };
// greet("Herald college Kathmandu");

// //3) 
// setTimeout(function(){
//     console.log('Execute later after 1 second')
// },1000);

//In this example, we pass an anonymois fucntion into the setTimeout() functin. The setTimeout() function executes this anonymous fucntion 1000 milisecond later
// ehich means 1 s later it print

// medialtely executing anonymous function:

//If you want to create a function and exceute it immediatley after the declaration, you can decaler an naonymous function like this:
//4)
// (function(){
//     console.log('IIFE');
// })();


// const numbers = [65, 44, 12, 4];
// const newArr = numbers.map(myFunction);

// document.getElementById("demo").innerHTML = newArr;
// function myFunction(num){
//     return num * 10;
// }

// const age = [33, 34, 16, 39];
// document.getElementById("demo").innerHTML = age.filter(myFunction);
// function myFunction(age){
//     return age > 18
// }

// const number = [175, 50, 25];
// document.getElementById("demo").innerHTML = number.reduce(myFunction);
// function myFunction(total, num){
//     return total - num;
// }


// setInterval(myFunction, 1000);
// function myFunction(){
//     let d = new Date();
//     document.getElementById("demo").innerHTML=
//     d.getHours() + ":" +
//     d.getMinutes() + ":" +
//     d.getSeconds() + ":" +
//     d.getMilliseconds() + ":" +
//     d.getMonth() + ":" +
//     d.getFullYear();
// }


// function add(x,y){
//     return x+y
// }
// function divide(x,y){
//     return x/y
// }
// function compute(callback, x, y){
//     return callback(x,y)
// }
// console.log(compute(add, 10, 5))
// console.log(compute(divide, 10, 5))


// function fact(n){
//     let fact=1;
//     for(let i = 0; i<=n;i++){
//         fact=fact*i;
//     }
//     document.write(fact);
// }
// function compute(callback, n){
//     return callback(n);
// }
// console.log(compute(fact,10))

// const count = false;
// let countValue = new Promise(function(resolve,reject){
//     if (count){
//         resolve("There is a count value.");
//     }else{
//         reject("there is no count value");
//     }
// });
// countValue.catch(function(value){
// document.write(value)});

// let countValue = new Promise(function(resolve,reject)
// {
//     resolve("promise resolved");
// });
// countValue
// .then(function sucessValue(result){
//     console.log(result);
// })
// .then(function successValue1(){
//     console.log("You can call multiple fucntion this way")
// });

// function triArea(base, height) {
//     let area = (base*height)/2;
//     return area;
// }
// console.log(triArea(3,2));
// console.log(triArea(7,4));
// console.log(triArea(10,10));

// function returnSomethingToMe(a){
//     return "something " + a;
// }
// console.log(returnSomethingToMe("is better than nothing"));
// console.log(returnSomethingToMe("Bob Jane"));
// console.log(returnSomethingToMe("something"));

// function total(twoPointer,threePointer){
//     let total = 2*twoPointer+3*threePointer;
//     return total;
// }
// console.log(total(1,1));
// console.log(total(7,5));
// console.log(total(38,8));

// function lessthan100(x,y){
//     if (x+y<100){
//         return true;
//     }
//     else{
//         return false;
//     }
// }
// console.log(lessthan100(22,15));
// console.log(lessthan100(83,34));
// console.log(lessthan100(3,77));

// function addUp(n){
//     let sum=0
//     for(let i = 1; i<=n; i++){
//         sum+=i;
//     }
//     return sum;
// }
// console.log(addUp(4));
// console.log(addUp(13));
// console.log(addUp(600));

// function oddishOrEvenish(num){
//     let sum=0;
//     while(num>0){
//         sum+=num%10;
//         num=Math.floor(num/10);
//     }
//     return sum%2===0?"Evenish" : "oddish";
// }
// console.log(oddishOrEvenish(121));
// console.log(oddishOrEvenish(41));
// console.log(oddishOrEvenish(43));
// console.log(oddishOrEvenish(373));
// console.log(oddishOrEvenish(4433));

// function isprime(num){
//     if(num<=1){
//         return false;
//     }
//     for (let i = 2; i <= Math.sqrt(num); i++){
//         if (num%i === 0){
//             return false;
//         }
//     }
//     return true;
// }
// function primeInRange(n1,n2){
//     for (let i = n1; i<=n2; i++){
//         if(isprime(i)){
//             return true;
//         }
//     }
//     return false;
// }
// console.log(primeInRange(10,15))
// console.log(primeInRange(62,66))
// console.log(primeInRange(3,5))

// function shiftToleft(x, y){
//     return x*(2**y);
// }
// console.log(shiftToleft(5,2));
// console.log(shiftToleft(10,3));
// console.log(shiftToleft(-32,2));
// console.log(shiftToleft(-6,5));
// console.log(shiftToleft(12,4));
// console.log(shiftToleft(46,6));

// function binary(decimal){
//     if(decimal===0){
//         return "0";
//     }
//     let binary = "";
//     let value = 256;
//     while (value >= 1){
//         if (decimal>=value){
//             binary += "1";
//             decimal -= value;
//         }else{
//             binary += "0";
//         }
//         value /= 2;
//     }
//     return binary;
// }
// console.log(binary(1));
// console.log(binary(2));
// console.log(binary(4));
// console.log(binary(8));
// console.log(binary(16));
// console.log(binary(32));
// console.log(binary(64));
// console.log(binary(128));
// console.log(binary(256));

// function shiftToleft(x,y){
//     if (y===0){
//         return x;
//     }else{
//         return shiftToleft(x*2, y-1);
//     }
// }
// console.log(shiftToleft(5,2));
// console.log(shiftToleft(10,3));
// console.log(shiftToleft(-32,2));
// console.log(shiftToleft(-6,5));
// console.log(shiftToleft(12,4));
// console.log(shiftToleft(46,6));


// function binary(decimal){
//     return decimal.toString(2);
// }
// console.log(binary(5));