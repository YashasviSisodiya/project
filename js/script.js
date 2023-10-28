let menu = document.querySelector('#menubars');
let navbar = document.querySelector('.navbar');

function myFunction() {
  // Declare variables
  var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById('myInput');
  filter = input.value.toUpperCase();
  ul = document.getElementById("myUL");
  li = ul.getElementsByTagName('li');

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[0];
    txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}

menu.onclick=()=>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

let section = document.querySelectorAll('section');
let navLinks= document.querySelectorAll('header .navbar a')

window.onscroll= () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');

    section.forEach(sec =>{
      let top=window.scrollY;
      let hieght= sec.offsetHeight;
      let offset= sec.offsetTop-150;
      let id= sec.getAttribute('id');

      if(top=>offset && top< offset+hieght){
        navLinks.forEach(links=>{
          links.classList.remove('active');
          document.querySelector('header .navbar a[href*='+id+']').classList.add('active');
        });
      };
    });
}

document.querySelector('#search-icon').onclick= ()=>{
    document.querySeelector('#search-form').classList.toggle('active');
}

document.querySelector('#close').onclick= ()=>{
    document.querySeelector('#search-form').classList.remove('active');
}



  function loader(){
    document.querySelector('.loader-container').classList.add('fade-out');
  }

  function fadeOut(){
    setInterval(loader, 3000);
  }

  window.onload= fadeOut;
