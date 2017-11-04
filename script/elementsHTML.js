/* created bY MOHSSINE_ABOUTAJ 1438/2017 */
/* Scrtpts for LOGO , HEADER , FOOTER */
"use strict";

// Button scroll to up
var btn = document.createElement('div');

btn.classList = 'fa fa-arrow-up toUp';

btn.onclick = function(){
    window.scrollTo(0,0);
};

setInterval(function(){
    if(window.pageYOffset <= window.innerHeight){
        btn.style.display = 'none';
    } else {
        btn.style.display = 'block';
    }
},1000)

document.body.appendChild(btn);

// navigation Bar
var nav = document.querySelector('nav');

window.onscroll = function(){
    if(window.pageYOffset <= '100'){
        nav.style.top = '0px';
    } else {
        nav.style.top = '-68px';
    }
};

nav.onmouseover = function(){
    nav.style.top = '0px';
};

// dropdown Botton
var drop = document.querySelector('.drop'),
    links = document.querySelector('nav').querySelector('ul');

drop.onclick = function(){
    if(links.style.display == 'block'){
        links.style.display = 'none';
    } else {
        links.style.display = 'block';
    }
};

// footer Elements 
var footer = document.getElementById('footer'),
    right = document.createElement('div'),
    left = document.createElement('div');

right.innerHTML = "جميع الحقوق &copy; محفوظة لاصحابها";
left.innerHTML = "تصميم و برمجة <a class='no-decore' href='#'><b>محسن ابوتاج</b></a> 1438/2017";

footer.appendChild(right);
footer.appendChild(left);