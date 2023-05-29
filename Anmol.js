const section=document.querySelector('section')
const navlink=document.querySelector('header nav a')
window.onscroll=()=>{
    section.forEach(sec=>{
    let top=window.scrollY;
    let offset=set.offsetTop - 150;
    let height=sec.offsetHeight;
    let id=sec.getattribute('id')
    if(top>=offset && top< offset + height )
    navlink.link.forEach(links=>{
        links.classList.remover('active')
        document.querySelector(['header nav a[href'='+id+']).classList.add('active')
    })
    })
    //<!--Sticky navbar-->
var header=document.querySelector('header')
header.classList.toggle("sticky",window.scrollY>100)
   
menubar.classList.remove('bx-x')
navbar.classList.remover('active')
};
    //<!--toogle changer-->
let menubar=document.querySelector('#menu')
let navbar=document.querySelector('.navbar')
menubar.onclick= ()=>{
    menubar.classList.toggle('bx-x')
    navbar.classList.toggle('active')
}
