'use strict';


const input=document.querySelectorAll('.form_input');

// console.log(input);













input.forEach((el) =>{
    const place=el.placeholder;
    el.addEventListener('focus',function(e){
        console.log("focusing");
        e.preventDefault();
        e.target.placeholder='';
    });
    el.addEventListener('blur',function(e){
        console.log("blurring");
        e.target.placeholder=place; 
    });
})

