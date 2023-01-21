//console.log("Hello world I am learning javascript!!!");
// let a = 5;
// console.log(typeof(a));
// let b = 6;
// let sum = a + b;
// console.log(sum);

// var a = 5;
// var b = 6;
// var product = a*b;
// console.log("The sum two product " + product);

/*const PI = 3.14;
let r = window.prompt("Enter the radius: ")
let c = 2*PI*r;
console.log("The circumference is " + c);*/
// let age = window.prompt("ENter the age of dog: ") //global 
// function age(){
//     var age;

//     age = window.prompt("Enter the age of dog");// local
//     if (age<=10){
//         console.log("The dog is young");
//     }
//     else{
//         console.log("The dog is old"); 
//     }
// // function bark(){
// //     console.log("The dog is barking");
// // }
// }
// age();

// function sleep(){
//     var age;

//     sleep = window.prompt("Enter the age of dog");
//     if (sleep<=10){
//         console.log("The dog sleep fast");
//     }
//     else{
//         console.log("The dog sleep late"); 
//     }
// // function bark(){
// //     console.log("The dog is barking");
// // }
// }
// sleep();

document.getElementById("myButton").onclick = function(){
    let radius = document.getElementById("myNumber").value;
    console.log(radius);
    const PI = 3.14;
    let circumference = 2 * PI * radius;
    document.getElementById("circumference").innerHTML = "Circumference" + circumference; // inner html overwrite
    // document.getElementById("circumference").append(circumference); // it is a function which will not overwrite and add it in there
    alert("Hello CG4 and it's me");
}