// JavaScript Internals, Math.random & Numbers

// let a = 10;
// let b = 345.6821;
// let c = b.toFixed(2);
// console.log(b);
// console.log(c);
// console.log(typeof c);
// console.log(b.toPrecision(3));
 

// new Keyword

// let a = new Number(20);
// console.log(a);
// console.log(typeof a);



// Math 

// console.log(Math.abs(-222));
// console.log(Math.ceil(0.8))
//console.log(Math.max(2,3))
// console.log(Math.round(2.54));

//Math.random()

// console.log(Math.floor(Math.random()*6)+1);
// console.log(Math.floor(Math.random()*9000)+1000)

let seed = 12345;
function myRandom() {
    seed = (seed * 16807) % 2147483647;
    return seed / 2147483647;
}
console.log(myRandom());
console.log(myRandom());
console.log(myRandom());