const myButton=document.createElement('button');
myButton.innerText="click me";
myButton.style.background="red";
const body=document.querySelector('body');
body.appendChild(myButton);
myButton.addEventListener('click',function(){
    const myImage=document.createElement('img');
    myImage.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRL5tXOk_pGR3NceWOJvudsbwBdaWS_kaTLkg&usqp=CAU";
    myImage.style.width=200;
    myImage.style.height=200;
    const imageDiv=document.getElementById('image');


    imageDiv.appendChild(myImage);
    
})