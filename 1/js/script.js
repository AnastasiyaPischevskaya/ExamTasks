'use strict';
let icon = document.getElementById("icon");
icon.onclick = function (){
  let menu = document.getElementById("menu");  
  console.log(menu.className);
  
  if (menu.className === "nav") {
    menu.className = "small";
    console.log(menu.className);
    
  } else {
    menu.className = "nav";
  }
}


