// q1 
document.getElementById('text').innerHTML='hello word'
// q2 
let tag=document.querySelector('h1');
tag.innerHTML ='new h1 ';
// q3 
let div=document.querySelector(".box");
div.innerHTML="i am a box";
// q4 
document.querySelector("h1").innerText="Hello World";
// q5 
let dir=document.querySelector('#main');
dir.addEventListener('click',function(){
    let direction= document.querySelector('.Flex');
    if(direction.style.flexDirection =="column"){
        direction.style.flexDirection='row';
    }else{
    direction.style.flexDirection='column';}
})
// q6 
let h1tag=document.querySelectorAll("h1")[2];
h1tag.setAttribute("id","heading");
h1tag.style.color="blue"
// q7 
document.querySelector("#chngbtn").addEventListener('click',function(){
    document.querySelector("#chngtext").innerText="Welcome to my page";
})

function clock(){
    let time= new Date();
    let hour= time.getHours();
    let min= time.getMinutes();
    let sec= time.getSeconds();

    document.getElementById('hh').innerHTML=hour + ":";
    document.getElementById('mm').innerHTML=min + ":";
    document.getElementById('ss').innerHTML=sec;
}
setInterval(clock,1000);

function value(){
    let sel=document.getElementById("years");
    let msg= sel.options[sel.selectedIndex].text;
    document.querySelector("#selValue").innerHTML=msg;
}
document.querySelector("#selBtn").addEventListener('click',function(){
    value();
})