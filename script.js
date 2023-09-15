// menu list
const menu=document.querySelector('.menu')
const menulist=document.querySelector('nav ul')

menu.addEventListener('click',()=>{
    menulist.classList.toggle('listmenu');
})

// Auto typing

var typing=new Typed(".autotype",{
    strings: ["Uvansankar","Front-end Developer"],
    typeSpeed: 50,
    backspeed: 50,
    loop:true
});

  AOS.init();
