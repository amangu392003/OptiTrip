'use strict';


const content=document.querySelector('.heading_content');
const btn1=document.querySelector('.story');
const btn2=document.querySelector('.skill_last');
const btn3=document.querySelector('.exp');
const under1=document.querySelector('.under1');
const under2=document.querySelector('.under2');
const under3=document.querySelector('.under3');


under1.style.transform='scaleX(1)';



btn1.addEventListener('click',function(){
    under1.style.transform='scaleX(1)';
    under2.style.transform='scaleX(0)';
    under3.style.transform='scaleX(0)';
    content.innerHTML="👋 Hey there! I'm Aman Gupta, a computer science student with a passion for coding and a sprinkle of humor! Embarking on a journey through the realms of technology, I've honed a diverse skill set that spans the entire spectrum.♦️ From wielding the mightiest sword of C++, sharpened by Data Structures & Algorithms, to conjuring elegant solutions in Java and Python 🐍♦️ Crafting scalable and resilient architectures of OpenShift/Kubernetes ☸ and making Ansible dances on playlists (playbooks)♦️ Navigating the world of Linux, harnessing the power of AWS services♦️ Digging through logs with Splunk, uncovering hidden gems of information, and having a love affair with Microservices.With my ChatGPT abilities, I can even have a conversation with your coffee machine! 🤖. But, that's not where I stop. I keep on exploring and learning new technologiesBeyond my hard skills, here's a glimpse into my soft skillsI have the privilege of leading an exceptional team at 'ARTH - The School of Technology'✨ as a technical volunteer head.As a conductor leading a symphony, I orchestrate our team's efforts, harmonizing each individual into a collective powerhouse. With infectious enthusiasm and a knack for humor, I create an environment fostering collaboration, mutual understanding, and personal growth.I embrace challenges with a smile and believe that laughter can make any debugging session a little less stressful! 😊 So, if you're looking 👀 for a tech enthusiast who knows their way around code and isn't afraid to add a touch of humor to their work, you've come to the right place! Let's connect!! And explore the exciting possibilities that lie ahead together! 😄✨";
});

btn2.addEventListener('click',function()
{
    under1.style.transform='scaleX(0)';
    under2.style.transform='scaleX(1)';
    under3.style.transform='scaleX(0)';
    content.innerHTML="DevOps / DevSecOps || AI/ML || Cloud Computing || Metaverse/BlockChain || RedHat/Linux System Administrator || Big Data || Integration Of Multiple Technologies";
});

btn3.addEventListener('click',function(){
    under1.style.transform='scaleX(0)';
    under2.style.transform='scaleX(0)';
    under3.style.transform='scaleX(1)';
    content.innerHTML="Head Technical Volunteer (Linux world) || DevOps / DevSecOps || AI/ML || Cloud Computing || Metaverse/BlockChain || RedHat/Linux System Administrator || Big Data || Integration Of Multiple Technologies";
});