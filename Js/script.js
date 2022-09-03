var open_bar = document.querySelector('#open-menu')
var close_bar = document.querySelector('#colse-menu')
var nav_bar = document.querySelector('.nav-bar')

open_bar.addEventListener('click', function (e){
   nav_bar.classList.add('active')
})
close_bar.addEventListener('click', function(e){
  nav_bar.classList.remove('active')
}
)
window.onscroll = () => {
  if (this.scrollY > 20) {
    nav_bar.classList.add('sticky')
  }
  else  {
    nav_bar.classList.remove('sticky')
  }
}