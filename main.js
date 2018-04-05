var menu = document.getElementById('menu');
var nav = document.getElementById('nav');

// console.log (menu);
// console.log(nav);

menu.onclick = function(){
    // console.log('124');
    nav.classList.toggle("show");
}

window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
  
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
}