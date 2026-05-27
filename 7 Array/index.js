//-------------Array---------------

// let array = [0,1,2,3,4,5];
// console.log(array);
// console.log(array.length);

// let arr = [10,10.3,"Aman",true]
// console.log(arr);
// console.log(arr[0]);
// arr[1] = 10.8;
// console.log(arr[1]);
// console.log(arr[2]);
// console.log(arr[3]);

// console.log(typeof arr);
// arr.push(2938)
// console.log(arr);


// add new elemenyt at beginning

// arr.unshift("Aman");
// console.log(arr)

//delete a element 

// arr.shift();
// console.log(arr) 


//-----iteration --


// let arr = [10,20,30,50,40];
//for loop
// for(let i = 0; i<arr.length; i++){
//     console.log(arr[i]);
// }

// for of loop
// for(let num of arr){
//     console.log(num);
// }


//let arr = [10,20,30,50,40];
// let arr2 = arr;
// arr2.push(30);
// console.log(arr2);

// -------operations 
//1. Slice 
// const arr = [10,20,30,50,40];
// console.log(arr.slice(1,3));

//2. Slice
// const arr = [10,20,30,50,40];
// const arr2 = arr.slice(2,4);
// console.log(arr)
// console.log(arr2)

// Splice 
// console.log(arr.splice(1,3));
// console.log(arr);

// console.log(arr.splice(1,3,"Aman",19));
// console.log(arr);

// Spread Operator 
// const arr = [10,20,30,50,40];
// const arr2 = ["Aman", 10 ,1];

// arr.push(arr2);
// console.log(arr); // [10,20,30,50,40,["Aman", 10 ,1]]


// const arr3 = arr.concat(arr2);
// console.log(arr3);    // [10, 20, 30, 50, 40, 'Aman',10, 1]
// it will return a new Array

//  Spread Operator  

// const arr = [10,20,30,50,40];
// const arr2 = ["Aman", 10 ,1];
// const arr3 = [...arr,...arr2]
// console.log(arr3);   //[10, 20, 30, 50, 40, 'Aman',10, 1]

// const names = ['Alice','aman','Bob', 'Charlie'];
// console.log(names.toString());          //Alice,Bob,Charlie

// join operation 

// console.log(names.join(" "));      //Alice Bob Charlie
// console.log(names.indexOf("Bob")) // 1
// console.log(names.lastIndexOf())
// console.log(names.includes("Bob"))

// Sorting
// names.sort();
// console.log(names);

//reverse
// names.reverse();
// console.log(names);

// const a = [101,90,80,32,91]; // it sort on basis of ASCII value and treat as charater and sort by character byy character
// a.sort();
// console.log(a);

const arr = [10,40,31,71,5,8,2,11]

arr.sort((a,b)=> a-b);
console.log(arr);  
