// async

//async always return a Promise

// async function greet(){
//     return "Aman";

//     // return new Promise((resolve,reject)=>{
//     //     resolve("Aman");
//     // })
// }
// const response = greet();
// response.then((data)=>{
//     console.log(data);
// }).catch((error)=>{
//     console.log("Error: ",error);
// })
 
// fetch("https://api.github.com/users")
// .then((response)=>response.json())
// .then((data)=>console.log(data));


// -------- Await --------
// const response = await fetch("https://api.github.com/users");
// const data = await response.json();
// console.log(data);
// console.log("Hello Gi");


async function github(){
    console.log("1");
    const response = await fetch("https://api.github.com/users");
    const data = await response.json();
    console.log(data); 
    console.log("2");
}  
console.log("3");
github();
console.log("4");