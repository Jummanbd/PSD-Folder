const navBar = document.querySelector('.header-menu-wrapper');
const navTop = document.querySelector('.back-to-top');

window.addEventListener('scroll', function(){
 
  const scrollHight = window.pageYOffset;

 const coned = navBar.getBoundingClientRect().height;

 if(scrollHight > coned){
     navBar.classList.add('show-background');
 }else{
    navBar .classList.remove('show-background')
 }
 if( scrollHight > 320 ){
  navTop.classList.add('show-upward')

}
else{
   navTop.classList.remove('show-upward')
}
});

const menuBtn = document.querySelector('.menu-toggle');
const menu = document.querySelector('.site-menu-wrapper');

menuBtn.addEventListener('click', showMenu)
function showMenu(){
  menu.classList.toggle('site-menu-active')
 
}

var timeRemove = document.querySelector('.humburger-menu-lines')
var sitMenu = document.querySelector('.site-menu-wrapper')

timeRemove.addEventListener('click', function(){
    sitMenu.classList.remove('site-menu-active')
})


var loadingShow = document.querySelector('.load-show');

window.addEventListener('load', function(){
    loadingShow.classList.add('load-hiden')
})
