const body = document.querySelector('body');

body.addEventListener('click',(e)=>{
    console.log(e.clientX,e.clientY);

    const text = ["hi","hello","Gandu","Madarchod","betichodeee ke"]
    const circleElement = document.createElement('div')
    circleElement.classList.add('circle');
    circleElement.textContent = text[Math.floor(Math.random()*5)];

    const color = ['red','blue','orange','pink','purple','green'];
    circleElement.style.backgroundColor = color[Math.floor(Math.random()*6)];


    circleElement.style.top = `${e.clientY-25}px`;
    circleElement.style.left = `${e.clientX-25}px`;


    body.append(circleElement);
    console.log(body);
    setTimeout(()=>{
        circleElement.remove();
    },5000);
})