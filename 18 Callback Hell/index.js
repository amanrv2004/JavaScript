// ZOmato Application;

// function placedOrder(callback){
//     console.log("Payment is in Progress....");
//     setTimeout(()=>{
//         console.log("Payment Successful and Order Placed.");
//         callback();
//     },3000);
// }

// function preparingOrder(callback){
//     console.log("Your food preparation started.....");
//     setTimeout(()=>{
//         console.log("Your Food is now Ready");
//         callback();
//     },4000);
// }
// function pickupOrder(callback){
//     console.log("Delivery Partner is on way to pickup Order.");
//     setTimeout(()=>{
//         console.log("Delivery Partner received the order!");
//         callback();
//     },3000);
// }
// function deliveredorder(){
//     console.log("Your Order is On the Way");
//     setTimeout(()=>{
//         console.log("Order Delivered Successfully!");
//     });
// }

// // callback Hell 

// placedOrder(()=>{
//     preparingOrder(()=>{
//         pickupOrder(()=>{
//             deliveredorder();
//         });
//     });
// });


 

// ZOmato Application;

// function placedOrder(callback){
//     console.log("Payment is in Progress....");
//     setTimeout(()=>{
//         console.log("Payment Successful and Order Placed.");
//         callback(pickupOrder);
//     },3000);
// }

// function preparingOrder(callback){
//     console.log("Your food preparation started.....");
//     setTimeout(()=>{
//         console.log("Your Food is now Ready");
//         callback()
//     },4000);
// }


// function pickupOrder(){
//     console.log("Pickup Delivery Partner recieved the order!");
//     setTimeout(()=>{
//         console.log("Delivery Partner is On the Way.")
//     },3000);
// }
// placedOrder(preparingOrder);




const orderDetail = {
    orderId: 123123,
    food:["Pizza","Biryani","Coke"],
    cost: 620,
    customerName:"Aman",
    customerLocation:"Beta 2",
    resturantLocation:"Alpha 2"
}

// ZOmato Application;

function placedOrder(orderDetail,callback){
    console.log(`${orderDetail.cost} Payment is in Progress....`);
    setTimeout(()=>{
        console.log("Payment Successful and Order Placed.");
        orderDetail.status = true;
        callback(orderDetail);
    },3000);
}

function preparingOrder(orderDetail,callback){
    console.log(`Your food ${orderDetail.food} preparation started.....`);
    setTimeout(()=>{
        console.log("Your Food is now Ready");
        orderDetail.token = 123;
        callback(orderDetail);
    },4000);
}
function pickupOrder(orderDetail,callback){
    console.log(`Delivery Partner is on way to pickup Order from ${orderDetail.resturantLocation}`);
    setTimeout(()=>{
        console.log("Delivery Partner received the order!");
        callback(orderDetail);
    },3000);
}
function deliveredorder(){
    console.log(`Your Order is On the Way to ${orderDetail.customerLocation}`);
    setTimeout(()=>{
        console.log(`${orderDetail.customerName}, your order delivered Successfully!`);
    });
}

// callback Hell 

placedOrder(orderDetail,(orderDetail)=>{
    preparingOrder(orderDetail,(orderDetail)=>{
        pickupOrder(orderDetail,(orderDetail)=>{
            deliveredorder(orderDetail);
        });
    });
});
