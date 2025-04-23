const get_nav_home = document.querySelector("#home");
const get_nav_about = document.querySelector("#about");
const get_nav_products = document.querySelector("#product");
const get_nav_contact = document.querySelector("#contact");
  
  
  
//Listener events
get_nav_products.addEventListener('click', function() {
	get_nav_products.style.backgroundColor = "blue";
	
	setTimeout(function() {
	 get_nav_products.style.backgroundColor = "skyBlue";
	 window.location.href = "products.html";
   },300);
	
 }
);