// function handleClick(){
//     const element  = document.getElementById("first");
//     element.textContent = "Strike is Coming.";
// }

// const element  = document.getElementById("first");
// element.onclick = function handleClick(){
//     element.textContent = "Strike is Coming.";
// }

// const element  = document.getElementById("first");
// element.onclick = function handleClick(){
//     element.textContent = "I am the best";
//     element.style.color = "red";
// }

// const element  = document.getElementById("first");
// element.addEventListener('dblclick' , ()=>{
//     element.textContent = "Strike is Coming.";
// });

// element.addEventListener('click' , ()=>{
//     element.style.color = "red";
// });

// const child1 = document.getElementById("child1");
// child1.addEventListener('click',()=>{
//      child1.textContent = "clicked!";
// });


// const parent = document.getElementById("parent");
// const childs = parent.children;
// for (let child of childs) {
//     child.addEventListener('click', () => {
//         child.textContent = "clicked!";
//     });
// }


//Bubbling 
// const grandparent = document.getElementById("grandparent");
// grandparent.addEventListener('click',(e)=>{
//     console.log(e.target);
//     // console.log("Grandparent is Clicked! ");
// })

// const parent = document.getElementById("parent");
// parent.addEventListener('click',()=>{
//     console.log(e.target);
//     // console.log("Parent is Clicked! ");
// })

// const child = document.getElementById("child");
// child.addEventListener('click',()=>{
//     console.log(e.target);
//     // console.log("Child is Clicked! ");
// })      


const parent = document.getElementById("parent");
function handleClick(e){
    e.target.textContent = "I am Clicked";
}

// Addition of Event Listener
parent.addEventListener('click',handleClick);

// removal of event listener
parent.removeEventListener('click',handleClick);



