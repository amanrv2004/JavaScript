//Single Threaded, Synchronous execution, and Event Loop 

// Single Threaded -- one task at a time 

//to check - dekho ....
// console.log("First");
// let sum = 0;
// for(let i =0; i<300000000; i++){
//     sum+=i;
// }
// console.log(sum);
// console.log("Second");


// console.log("Hello");
// setTimeout(()=>{
//     console.log("Gandu");
// },5000);
// console.log("GIIII")

fetch("https://api.github.com/user").then(()=>{
    console.log("Git hub User Info");
})

console.log("End")
