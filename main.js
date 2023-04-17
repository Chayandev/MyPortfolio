let menu = document.querySelector('#menu-icon');
let nav= document.querySelector('.nav')
let navbar = nav.querySelectorAll("a");
menu.onclick = () => {
      menu.classList.toggle("gg-close");
      nav.classList.toggle('open')
}
navbar.forEach(element =>{
      element.addEventListener('click', function (){
            navbar.forEach(nav => nav.classList.remove("active"))
            
            this.classList.add('active')
      })
})