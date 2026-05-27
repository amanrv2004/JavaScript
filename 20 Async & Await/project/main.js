
//-----------Project 1 -------


// async function github() {
//     try {
//         const response = await fetch("https://api.github.com/users");
//         const data = await response.json();
//         // console.log(data);
//         if(!response.ok){
//             throw new Error("Data is not Present");
//         }

//         const parent = document.getElementById('first');

//         for (let user of data) {
//             const element = document.createElement('div');
//             element.classList.add('user');

//             const image = document.createElement('img');
//             image.src = user.avatar_url;
//             image.classList.add('img');

//             const userName = document.createElement('h2');
//             userName.textContent = user.login.toUpperCase();

//             const anchor = document.createElement('a')
//             anchor.href = user.html_url;
//             anchor.textContent = "Visit Profile ";

//             element.append(image, userName, anchor);
//             parent.append(element);
//         }
//     } catch(error) {
//         console.log("Error");
//     }
// }


// github();




// - ----------- Project 2 --------------



// const orderDetail = {
//     orderId: 123123,
//     food: ["Pizza", "Biryani", "Coke"],
//     cost: 620,
//     customerName: "Aman",
//     customerLocation: "Beta 2",
//     resturantLocation: "Alpha 2"
// }

// // ZOmato Application;

// function placedOrder(orderDetail) {
//     console.log(`${orderDetail.cost} Payment is in Progress....`);
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if(Math.random() * 10 > 5){
//             console.log("Payment Successful and Order Placed.");
//             orderDetail.status = true;
//             resolve(orderDetail);
//             }
//             else{
//                 reject(new Error("Payment is failed"));
//             }
//         }, 3000)
//     })

// }

// function preparingOrder(orderDetail) {
//     console.log(`Your food ${orderDetail.food} preparation started.....`);
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if(Math.random() * 10 > 3){
//             console.log("Your Food is now Ready");
//             orderDetail.token = 123;
//             resolve(orderDetail);
//             }
//             else{
//                 reject(new Error("Resturant is Out of Service"));
//             }
//         }, 4000);
//     })

// }
// function pickupOrder(orderDetail) {
//     console.log(`Delivery Partner is on way to pickup Order from ${orderDetail.resturantLocation}`);
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if(Math.random() * 10 > 2){
//             console.log("Delivery Partner received the order!");
//             resolve(orderDetail);
//             }
//             else{
//                 reject(new Error("Pickup Failed . Assigning new Partner"));
//             }
//         }, 3000);
//     })
// }
// function deliveredorder() {
//     console.log(`Your Order is On the Way to ${orderDetail.customerLocation}`);
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//         if(Math.random() * 10 > 1){
//         console.log(`${orderDetail.customerName}, your order delivered Successfully!`);
//         orderDetail.delivery = true;
//         resolve(orderDetail);
//         }
//         else{
//                 reject(new Error("Delivery Failed"));
//             }
//     },3000)
//     })   
// }
// async function ordering() {
//     try{
//     const response1 = await placedOrder(orderDetail);
//     const response2 = await preparingOrder(response1);
//     const response3 = await pickupOrder(response2);
//     const response4 = await deliveredorder(response3);
//     }catch(error){
//         console.log("Error",error);
//     }
// }
// ordering();


async function userDetail() {
    const [comment, photo, chat] = await Promise.all([fetch("userComment"), fetch("userPhoto"), fetch("chat"),])
}