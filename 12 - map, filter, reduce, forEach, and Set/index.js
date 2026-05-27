// - map, filter, reduce, forEach, and Set 

// --- 1. For Each 
// const arr = [10,20,110,5,90];

// arr.forEach((number,index,arr)=>{
//     console.log(number,index,arr);
// })
// let sum= 110;
// arr.forEach((number,index)=>{
//     if(number == sum){
//         console.log(number,index);
//     }
// })

// --- 2. filter 

// const arr = [10,20,110,5,90];

// const newArr = arr.filter((number)=> number >25);
// console.log(newArr);

// arr.filtering = function(compare){
//     const ans = [];
//          for(let num of this){
//             if(compare(num)){
//                 ans.push(num);
//             }
//          }
// }
// const newArray = arr.filter((num)=>num>25);
// console.log(newArray);

// --- 3. Map 

// const arr = [10,20,110,5,90];
// const newArr = arr.map((num)=>num);
// console.log(newArr);

// --- 4. Reduce 

// const totalPrice = products.reduce((accmulator,currentValue)=>{
//     return accmulator+currentValue.price;
// },0)
// console.log(totalPrice);


// --- 5. Set 

// const arr = [10,20,30,10,15,10,20];
// const s1 = new Set(arr);
// console.log(s1);
// s1.add(22);
// console.log(s1.has(22));
// console.log(s1.has(12));
// s1.delete(10);
// console.log(s1);
// s1.clear();
// console.log(s1);

// const email = ['1@gmail','2@hmail','1@gmail'];
// const uniqueEmail = [...new Set(email)];
// console.log(uniqueEmail);
// const s1 = new Set(email);
// for(let num of s1){
//     console.log(num);
// }


// ------ 6. MAP in objects - map stores key value pair

const m1 = new Map([
    ["Rohit",20],
    [2,"Rohit"],
    [true,11],
    [[10,20,30],"Mohit"]
]);

console.log(m1);

m1.set({name:"Aman",age:21},false);

console.log(m1);