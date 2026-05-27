//new Element  Createion 
const newElement = document.createElement("h2");
newElement.textContent = "Strike is Coming!";    // text entry 
newElement.id = "second"; // id assignment 
console.log(newElement);

//select element
const element =  document.getElementById("first");

//showing on page 
element.after(newElement);
// element.before(newElement);


//new Element 2 Createion 
const newElement2 = document.createElement("h3");
newElement2.textContent = "Diwali aa Rahi hai "; // text entry 
newElement2.id = "third";   // id assignment 
// newElement2.className = "diwali";   // class assignment 
// newElement2.className += " holi";  // adding two classes

//do this 
newElement2.classList.add("diwali");
newElement2.classList.add("holi");
newElement2.classList.add("republic");
newElement2.classList.remove("republic");// you can delete particular className

element.before(newElement2);
newElement2.style.backgroundColor = "pink";
newElement2.style.color = "black";newElement2.style.fontSize = "46px";

newElement2.setAttribute("hero","ji"); // custom attribute
console.log(newElement2.getAttribute("hero"));


// //creating a list 
// const list1 = document.createElement('li');
// list1.textContent = "Milk";

// const list2 = document.createElement('li');
// list2.textContent = "Cookies";

// const list3 = document.createElement('li');
// list3.textContent = "Halwa";
// const list4 = document.createElement('li');
// list4.textContent = "Paneer";

// //updating list 
// const unorderedlist = document.getElementById("listing");

// unorderedlist.append(list1,list2);
// unorderedlist.prepend(list3);
// unorderedlist.children[1].after(list4);


// const arr = [ "Milk","Halwa","Paneer","Tofu","Tea"];
// const unorderedlist = document.getElementById("listing");
// for(let food of arr){
//     const list = document.createElement("li");
//     list.textContent = food;
//     unorderedlist.append(list);
// }

// const arr = [ "Milk","Halwa","Paneer","Tofu","Tea"];
// const unorderedlist = document.getElementById("listing");
// const fragment = document.createDocumentFragment();
// for(let food of arr){
//     const list = document.createElement("li");
//     list.textContent = food;
//     fragment.append(list);
// }
//  unorderedlist.append(fragment);


// delete 
// const s1 = document.getElementById('first');
// s1.remove();

// Old ways to do - 
// const month = document.getElementById('ten');
// console.log(month.children);
// const lister = document.createElement('li');
// lister.textContent= "Help";
// month.insertAdjacentElement("afterend",lister);

