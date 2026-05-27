
// const p1 = fetch("https://api.github.com/users");

// // p1.then((response)=>{
// //     console.log(response.json());
// // })

// //fullfilled , reject
// const p2 = p1.then((response)=>{
//     return response.json();
// });

// p2.then((data)=>{
//     console.log(data);
// });


// Promise Chaning 
// fetch("https://api.github.com/users")
// .then((response)=>{
//     return response.json();
// }).then((data)=>{
//     console.log(data);
//     const parent = document.getElementById('first');

//     for(let i = 0 ; i<=30; i++){
//         const image = document.createElement('img');
//         image.src = data[i].avatar_url;
//         image.style.width = "400px";
//         image.style.height = "400px";
//         parent.append(image);
//     }
// })

// const j1 = {
//     name:"Rohit",
//     age:30,
//     address:"Noida"
// }

// //string 
// const actualjsonFormate = `{
//     "name":"Rohit",
//     "age":30,
//     "address":"Noida"
// }`


// // convert JSON to Js object 
// const jsObject = JSON.parse(actualjsonFormate);
// console.log(jsObject);

// //convert js Object to JSON 
// const jsonFormate = JSON.stringify(j1)
// console.log(jsonFormate);




//-----Error Handling ---
// fetch("https://api.github.com/users")
// .then((response)=>{

//     if(!response.ok){
//         throw new Error("Data is not present in server");
//     }
//     return response.json();

// })
// .then((data)=>{

//     const parent = document.getElementById('first');

//     for(let i = 0; i < data.length; i++){

//         const image = document.createElement('img');

//         image.src = data[i].avatar_url;

//         image.style.width = "400px";
//         image.style.height = "400px";
//         image.style.border = "2px solid black";
//         image.style.margin = "2px";

//         parent.append(image);
//     }

// })
// .catch((error)=>{
//     const parent = document.getElementById("first");
//     parent.textContent = error.message;
// });



// creation of Promises

// const p1 = new Promise((resolve,reject)=>{
//     resolve("Hello");
// })
// p1.then((response)=>{
//     console.log(response);
// }).catch((error)=>{
//     console.log(error);
// })



//Solving the Callback Hell Problem ------

const orderDetail = {
    orderId: 123123,
    food: ["Pizza", "Biryani", "Coke"],
    cost: 620,
    customerName: "Aman",
    customerLocation: "Beta 2",
    resturantLocation: "Alpha 2"
}

// ZOmato Application;

function placedOrder(orderDetail) {
    console.log(`${orderDetail.cost} Payment is in Progress....`);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(Math.random() * 10 > 5){
            console.log("Payment Successful and Order Placed.");
            orderDetail.status = true;
            resolve(orderDetail);
            }
            else{
                reject(new Error("Payment is failed"));
            }
        }, 3000)
    })

}

function preparingOrder(orderDetail) {
    console.log(`Your food ${orderDetail.food} preparation started.....`);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(Math.random() * 10 > 3){
            console.log("Your Food is now Ready");
            orderDetail.token = 123;
            resolve(orderDetail);
            }
            else{
                reject(new Error("Resturant is Out of Service"));
            }
        }, 4000);
    })

}
function pickupOrder(orderDetail) {
    console.log(`Delivery Partner is on way to pickup Order from ${orderDetail.resturantLocation}`);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(Math.random() * 10 > 2){
            console.log("Delivery Partner received the order!");
            resolve(orderDetail);
            }
            else{
                reject(new Error("Pickup Failed . Assigning new Partner"));
            }
        }, 3000);
    })
}
function deliveredorder() {
    console.log(`Your Order is On the Way to ${orderDetail.customerLocation}`);
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
        if(Math.random() * 10 > 1){
        console.log(`${orderDetail.customerName}, your order delivered Successfully!`);
        orderDetail.delivery = true;
        resolve(orderDetail);
        }
        else{
                reject(new Error("Delivery Failed"));
            }
    },3000)
    })   
}


// placedOrder(orderDetail);
// preparingOrder(orderDetail);
// pickupOrder(orderDetail);
// deliveredorder(orderDetail);

placedOrder(orderDetail)
    .then((orderDetail) => preparingOrder(orderDetail))
    .then((orderDetail) => pickupOrder(orderDetail))
    .then((orderDetail) => deliveredorder(orderDetail))
    .then((orderDetail)=>{
        console.log(orderDetail);
    })
    .catch((error)=>{
        console.log("Error : ",error.message);
    })
    .finally(()=>{
        console.log("I am doing cleanup");
    })