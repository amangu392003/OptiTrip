'use strict';
//A bunch of Elements selected:
const cards=document.querySelectorAll('.card');
const banner=document.querySelector('.hero_img');
const nav=document.querySelector('.nav_bar');
const section2 =document.querySelector('.hero_section2');
const wrapperElem = document.getElementsByClassName('wrapper')[0];
const logo=document.querySelector('.logo');
const nav_btn=document.querySelector('.nav_btn');
const section3=document.querySelector('.scroll_hero_section3');
const section3child=document.querySelectorAll('.hero_section3');
const social_media_icon=document.querySelectorAll('.all_icon1');
const change=document.querySelector('.changing_word');
const card_section=document.querySelector('.card_section');
const expBtn = document.querySelector(".hero1_btn");
const marq = document.querySelector(".marq");
const learn_more=document.querySelector('.link1');
const explore_now=document.querySelector('.link2');
const get_started=document.querySelector('.link3');
const track_progress=document.querySelector('.link4');
const card_desc=document.querySelectorAll('.card_desc');

const card_description1=document.querySelector('.card_description1');
const card_description2=document.querySelector('.card_description2');
const card_description3=document.querySelector('.card_description3');
const card_description4=document.querySelector('.card_description4');

const come_back=document.querySelectorAll('.x_mark');










////////////////////////////////////////////////////////
//called whenever mouse is over element 'cards'.
cards.forEach((card) => {
    card.addEventListener('mouseover', function(e){
        e.preventDefault();
        const icon=card.children[0].children[0];
        if(icon.classList.contains('fa-lg'))
        {
            icon.classList.add('fa-beat');
        }
    })
});

//called whenever mouse is out to element 'cards'.
cards.forEach((card) => {
    card.addEventListener('mouseout',function(e){
        e.preventDefault();
        const icon=card.children[0].children[0];
        if(icon.classList.contains('fa-lg'))
        {
            icon.classList.remove('fa-beat');
        }
    })
});










// console.log(wrapperElem.getBoundingClientRect());

//whenever 'scrolling' event happens and first intro section has passed.
wrapperElem.addEventListener('scroll', function(e){
    // console.log(wrapperElem);
    if(section2.getBoundingClientRect().top<80)
    {
        nav.classList.add('nav_scroll');
        logo.style.left='100px';
        nav_btn.style.right='70px';

    }
    else if(section2.getBoundingClientRect().top>80 || section2.getBoundingClientRect().top===80)
    {
        nav.classList.remove('nav_scroll');
        logo.style.left='0px';
        nav_btn.style.right='0px';
    }
});




// const [frstchild,secondchild]=section3child;
// const arr=[frstchild,secondchild];
// // console.log(arr);
// setInterval(() => {
//     arr.forEach((el) =>{
//         if(el.classList.contains('hidden'))
//         {
//             el.classList.remove('hidden');
//         }
//         else
//         {
//             el.classList.add('hidden');
//         }
//     });
// }, 2000);










social_media_icon.forEach((el) =>{
    el.addEventListener('mouseover',function(e){
        e.preventDefault();
        el.classList.add('fa-beat');
    });

    el.addEventListener('mouseout',function(e){
        e.preventDefault();
        el.classList.remove('fa-beat');
    })
})


// expBtn.addEventListener("click",()=>{
//     window.open("https://chat-app-woad-psi.vercel.app/login");
// })


//Animation code:
const tl=gsap.timeline();

tl.from(".early_section .early_logo .early_logo_image",{
    scale:0,
    opacity:0,
    duration:3,
    delay:1.5,
});

tl.to(".early_section",{
    display:'none',
});
tl.to(".wrapper",{
    display:'block',
});

tl.from(".logo-image",{
    opacity:0,
    scale:0,
});

tl.from(".link",{
    opacity:0,
    stagger:0.3,
    y:-30,
});

tl.from(".signup_nav_btn , .nav_btn",{
    opacity:0,
    x:100,
    stagger:0.3,
});



learn_more.addEventListener('click',function(e){
    e.preventDefault();
    card_description1.classList.toggle('learn_more');
    wrapperElem.style.opacity='0.8';
});

explore_now.addEventListener('click',function(e){
    e.preventDefault();
    card_description2.classList.toggle('learn_more');
    wrapperElem.style.opacity='0.8';
})

get_started.addEventListener('click',function(e){
    e.preventDefault();
    card_description3.classList.toggle('learn_more');
    wrapperElem.style.opacity='0.8';
})

track_progress.addEventListener('click',function(e){
    e.preventDefault();
    card_description4.classList.toggle('learn_more');
    wrapperElem.style.opacity='0.8';
})

come_back.forEach(el => el.addEventListener('click',function(e){
    e.preventDefault();
    wrapperElem.style.opacity='1';
    console.log(card_desc);
    card_desc.forEach(a =>{
        if(a.classList.contains('learn_more'))
        {
            a.classList.remove('learn_more');
        }
    });
}));