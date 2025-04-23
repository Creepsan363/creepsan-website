const get_all_product1_con = document.querySelector(".all-product1-con");
const get_all_product2_con = document.querySelector(".all-product2-con");
const get_all_product3_con = document.querySelector(".all-product3-con");
const get_all_product4_con = document.querySelector(".all-product4-con");

const get_all_product5_con = document.querySelector(".all-product5-con");
const get_all_product6_con = document.querySelector(".all-product6-con");
const get_all_product7_con = document.querySelector(".all-product7-con");
const get_all_product8_con = document.querySelector(".all-product8-con");

const get_all_product9_con = document.querySelector(".all-product9-con");
const get_all_product10_con = document.querySelector(".all-product10-con");
const get_all_product11_con = document.querySelector(".all-product11-con");
const get_all_product12_con = document.querySelector(".all-product12-con");


const get_all_sub_con = document.querySelector("#all-products-sub-con");
const get_all_sub2_con = document.querySelector("#all-products-sub2-con");
const get_all_sub3_con = document.querySelector("#all-products-sub3-con");


//Next Page selection section
const getPage1 = document.querySelector("#select1-con");
const getPage2 = document.querySelector("#select2-con");
const getPage3 = document.querySelector("#select3-con");


//get Images section 
const product1Img = document.querySelector("#all-product-tv1");
const product2Img = document.querySelector("#all-product-tv2");
const product3Img = document.querySelector("#all-product-tv3");
const product4Img = document.querySelector("#all-product-tv4");

const product5Img = document.querySelector("#all-product-tv5");
const product6Img = document.querySelector("#all-product-tv6");
const product7Img = document.querySelector("#all-product-tv7");
const product8Img = document.querySelector("#all-product-tv8");

const product9Img = document.querySelector("#all-product-tv9");
const product10Img = document.querySelector("#all-product-tv10");
const product11Img = document.querySelector("#all-product-tv11");
const product12Img = document.querySelector("#all-product-tv12");



//Description of products
const product1Description = "Experience crisp visuals and smooth performance with the Samsung 43-inch HD LED TV, perfect for bedrooms and small living rooms. Its sleek design blends well with modern interiors.<br><br>Features:<br><br> * Screen Size: 43 inches<br><br> * Display: HD resolution (1366 x 768)<br><br> * Panel Type: LED<br><br> * Connectivity: 2 HDMI ports, 1 USB port<br><br> * Sound: Dolby Digital Plus with 20W output<br><br> * Smart Features: Optional (model-dependent)<br><br> * Design: Slim bezels with table stand or wall mount";
const product2Description = "Combining the trusted performance of Panasonic with affordable pricing from Lenove, this 108cm TV is a solid choice for mid-size rooms, delivering good visuals and basic smart functionality.<br><br> Features:<br><br> * Display: Full HD (1920 x 1080)<br><br> * Panel Type: LED<br><br> * Connectivity: HDMI and USB ports<br><br> * Sound: Clear audio with stereo output<br><br> * Smart Features: Select models may include basic smart<br><br> * OS Design: Modern black frame with sturdy stand"; 
const product3Description = "Step into the world of ultra-high-definition entertainment with the Intex 4K HD LED TV. Ideal for movie lovers and gamers who want a budget 4K experience.<br><br>Features:<br><br> * Resolution: 4K Ultra HD (3840 x 2160)<br><br> * Display Type: LED<br><br> * Screen Size: Typically 50 or above (exact size may vary)<br><br> * Connectivity: Multiple HDMI and USB ports<br><br> * Sound: 24W speakers with surround support<br><br> * Smart Features: Android-based OS with apps support<br><br> * Design: Slim profile, minimal bezels";
const product4Description = "With a wide 139cm (55 inch) screen and Full HD clarity, this Intex TV is great for home theaters or large family rooms, offering solid visuals and dependable performance.<br><br>Features:<br><br> * Screen Size: 139 cm (55 inches)<br><br> * Resolution: Full HD (1920 x 1080)<br><br> * Panel Type: LED<br><br> * Connectivity: HDMI, USB, AV input<br><br> * Sound: Dual speakers for immersive audio<br><br> * Smart Features: Optional models available<br><br> * Design: Simple and functional aesthetic";

const product5Description = "Affordable and reliable, the Itel 32-inch HD LED TV is designed for compact spaces like bedrooms or small offices. It delivers clear visuals and essential connectivity options.<br><br> Features:<br><br> * Screen Size: 32 inches<br><br> * Resolution: HD (1366 x 768)<br><br> Display Type: LED<br><br> * Connectivity: HDMI, USB, AV ports<br><br> * Sound: Decent stereo speakers<br><br> * Smart Features: Not included (standard model)<br><br> * Design: Slim and lightweight frame";
const product6Description = "Known for quality and durability, the Panasonic 32-inch HD TV is a great entry-level choice with excellent color reproduction and a trusted brand reputation.<br><br>Features:<br><br> * Screen Size: 32 inches<br><br> * Resolution: HD (1366 x 768)<br><br> * Display Type: LED<br><br> * Connectivity: 2 HDMI ports, 1 USB port<br><br> * Sound: Clear surround sound with 16W output<br><br> * Smart Features: Some variants include<br><br> * Smart OS Design: Compact and elegant with narrow bezels";
const product7Description = "Experience premium entertainment with LG’s QNED 4K Smart TV. It combines Quantum Dot and NanoCell technologies for vibrant, true-to-life visuals and comes packed with AI-powered features.<br><br>Features:<br><br> * Resolution: 4K Ultra HD (3840 x 2160)<br><br> * Display Type: QNED (Quantum NanoCell)<br><br> * Screen Size: Available in 50 to 75+ variants<br><br> * Smart Features: WebOS, ThinQ AI, voice control<br><br> * Connectivity: Multiple HDMI & USB ports, Bluetooth, Wi-Fi<br><br> * Sound: AI Sound Pro with immersive 20W+ output<br><br> * Extra: Dolby Vision, HDR10, Game Optimizer mode";
const product8Description = "Get smart on a budget with the Itel Smart LED HD TV. Ideal for first-time smart TV users, it offers essential apps and a user-friendly interface along with crisp visuals.<br><br>Features:<br><br> * Resolution: HD (1366 x 768)<br><br> * Display: LED Panel<br><br> * Screen Size: Typically 32 inches<br><br> * Smart Features: Android-based OS, YouTube, Netflix, screen mirroring<br><br> * Connectivity: HDMI, USB, Wi-Fi<br><br> * Sound: Built-in stereo speakers<br><br> * Design: Sleek frame with smart remote included";

const product9Description = "A budget-friendly option for smaller rooms, the Intex 80cm (32 inch) HD LED TV delivers clear picture quality and decent sound for everyday entertainment needs.<br><br>Features:<br><br> * Screen Size: 80 cm (32 inches)<br><br> * Resolution: HD (1366 x 768)<br><br> * Display Type: LED Connectivity: HDMI, USB, AV input<br><br> * Sound Output: Dual speakers with 20W output<br><br * Smart Features: Not included (standard model)<br><br> * Design: Compact build with slim bezels";
const product10Description = "The Lenovo ThinkVision E24q-20 is a professional-grade monitor built for productivity and precision, ideal for office or design work. It offers QHD resolution and ergonomic adjustments.<br><br>Features:<br><br> * Screen Size: 23.8 inches<br><br> * Resolution: QHD (2560 x 1440)<br><br> * Panel Type: IPS Refresh Rate: 60Hz<br><br> Connectivity: HDMI,<br><br> * DisplayPort Viewing Angles: 178° wide viewing<br><br> *  Design: Ultra-slim bezels with tilt, swivel, and height adjustment<br><br> * Extras: Low blue light, flicker-free technology";
const product11Description = "The Panasonic NX800 is a high-performance 4K Smart TV designed for immersive entertainment. With built-in smart features and ultra-sharp visuals, it suits both casual viewers and media enthusiasts.<br><br>Features:<br><br> * Resolution: 4K Ultra HD (3840 x 2160)<br><br> * Display Type: LED with HDR support<br><br> * Smart Features: Android TV, Google Assistant, Chromecast Built-in<br><br> * Screen Sizes: Available in 43, 50, 55, and 65<br><br> * Connectivity: HDMI, USB, Bluetooth,<br><br> * Wi-Fi Sound: Surround sound with Dolby Atmos support<br><br> * Extras: Voice remote, customizable home screen";
const product12Description = "Step into the future of TV technology with the 2024 Samsung QLED HD TV. Using Quantum Dot technology, it offers rich colors and advanced smart features in a sleek package.<br><br>Features:<br><br> * Resolution: Full HD or 4K (model dependent)<br><br> * Display Type: QLED (Quantum Dot)<br><br> * Smart Features: Tizen OS, Bixby/Google Assistant/Alexa, Smart Hub<br><br> * Connectivity: Multiple HDMI & USB ports, Wi-Fi, Bluetooth<br><br> * Sound: Object Tracking Sound Lite with Adaptive Sound<br><br> * Design: Slim bezels, AirSlim profile<br><br> * Extras: Game Mode, HDR10+, Ambient Mode";



//transfer object 
let product1 = {
	 name: "Samsung 43 inch TV HD LED",
	 price: "Rp 28,999.00",
	 image: "images/products/tv1.jpeg",
	 rating: "images/rating-icons/star4.png",
	 description: product1Description
	}
	
let product2 = {
	 name: "Lenovo Panasonic TV 108cm",
	 price: "Rp 18,599.00",
	 image: "images/products/tv2.jpeg",
	 rating: "images/rating-icons/star3.png",
	 description: product2Description
	}
	
let product3 = {
	 name: "Intex 4k HD LED",
	 price: "Rp 32,000.00",
	 image: "images/products/tv3.jpg",
	 rating: "images/rating-icons/star4.png",
	 description: product3Description
	}
	
let product4 = {
	 name: "Intex 139cm Full HD LED",
	 price: "Rp 25,499.00",
	 image: "images/products/tv4.jpg",
	 rating: "images/rating-icons/star4.png",
	 description: product4Description
	}
	
	
	
let product5 = {
	 name: "Itel 32 HD LED TV",
	 price: "Rp 15,000.00",
	 image: "images/products/tv5.jpeg",
	 rating: "images/rating-icons/star3-5.png",
	 description: product5Description
	}
	
let product6 = {
	 name: "Panasonic 32 inch HD TV",
	 price: "Rp 18,000.00",
	 image: "images/products/tv6.jpg",
	 rating: "images/rating-icons/star2.png",
	 description: product6Description
	}
	
let product7 = {
	 name: "LG 4k Smart QNED TV",
	 price: "Rp 19,899.00",
	 image: "images/products/tv7.jpg",
	 rating: "images/rating-icons/star2-5.png",
	 description: product7Description
	}

let product8 = {
	 name: "Itel Smart LED HD TV",
	 price: "Rp 22,500.00",
	 image: "images/products/tv8.jpeg",
	 rating: "images/rating-icons/star4.png",
	 description: product8Description
	}
	
	
	
let product9 = {
	 name: "Intex 80cm HD LED TV",
	 price: "Rp 12,999.00",
	 image: "images/products/tv9.jpg",
	 rating: "images/rating-icons/star1-5.png",
	 description: product9Description
	}
	
let product10 = {
	 name: "Lenovo Thinkvision E24Q-20",
	 price: "Rp 35,000.00",
	 image: "images/products/tv10.jpg",
	 rating: "images/rating-icons/star3.png",
	 description: product10Description
	}
	
let product11 = {
	 name: "Panasonic NX800 Smart HD 4K",
	 price: "Rp 15,299.00",
	 image: "images/products/tv11.webp",
	 rating: "images/rating-icons/star4-5.png",
	 description: product11Description
	}
	
let product12 = {
	 name: "Samsung 2024 QLED HD TV",
	 price: "Rp 35,599.00",
	 image: "images/products/tv12.jpg",
	 rating: "images/rating-icons/star4-5.png",
	 description: product12Description
	}





function page1() {
	 
	 get_all_sub_con.classList.add("page-animation");
	 setTimeout(function() {
		get_all_sub_con.classList.remove("page-animation");
     },290);
     
	
	 getPage1.style.backgroundColor = "skyBlue";
 	getPage1.style.color = "white";
 	getPage2.style.backgroundColor = "#353535";
 	getPage2.style.color = "black";
	 getPage3.style.backgroundColor = "#353535";
 	getPage3.style.color = "black";
	
	
 	get_all_sub_con.style.zIndex = "3";
 	get_all_sub2_con.style.zIndex = "1";
 	get_all_sub3_con.style.zIndex = "2";
	}
	
function page2() {
	
     
     get_all_sub2_con.classList.add("page-animation");
	 setTimeout(function() {
		get_all_sub2_con.classList.remove("page-animation");
     },290);
     
	
	 getPage1.style.backgroundColor = "#353535";
	 getPage1.style.color = "black";
 	getPage2.style.backgroundColor = "skyBlue";
 	getPage2.style.color = "white";
 	getPage3.style.backgroundColor = "#353535";
 	getPage3.style.color = "black";
	
 	get_all_sub_con.style.zIndex = "1";
 	get_all_sub2_con.style.zIndex = "3";
	 get_all_sub3_con.style.zIndex = "2";
	}
	
function page3() {
	
     
     get_all_sub3_con.classList.add("page-animation");
	 setTimeout(function() {
		get_all_sub3_con.classList.remove("page-animation");
     },290);
	
	 getPage1.style.backgroundColor = "#353535";
	 getPage1.style.color = "black";
 	getPage3.style.backgroundColor = "skyBlue";
 	getPage3.style.color = "white";
 	getPage2.style.backgroundColor = "#353535";
 	getPage2.style.color = "black";
	
 	get_all_sub_con.style.zIndex = "1";
 	get_all_sub2_con.style.zIndex = "2";
 	get_all_sub3_con.style.zIndex = "3";
	}
	
//function for setting on local storage
 




function changeProduct(change) {
	 if (change == "rating") {
		 
		 page1();
		
		 get_all_sub_con.appendChild(get_all_product11_con);
	 	get_all_product11_con.style.left = "3%";
	     get_all_product11_con.style.top = "3%";
	
	     get_all_sub_con.appendChild(get_all_product12_con);
	 	get_all_product12_con.style.left = "52%";
	     get_all_product12_con.style.top = "3%";
	
	     get_all_sub_con.appendChild(get_all_product1_con);
	 	get_all_product1_con.style.left = "3%";
	     get_all_product1_con.style.top = "52%";
	
	     get_all_sub_con.appendChild(get_all_product3_con);
	 	get_all_product3_con.style.left = "52%";
	     get_all_product3_con.style.top = "52%";
	
	
	
	     get_all_sub2_con.appendChild(get_all_product4_con);
	     get_all_product4_con.style.left = "3%";
	     get_all_product4_con.style.top = "3%";
	
	     get_all_sub2_con.appendChild(get_all_product8_con);
	     get_all_product8_con.style.left = "52%";
	     get_all_product8_con.style.top = "3%";
	
	     get_all_sub2_con.appendChild(get_all_product5_con);
	     get_all_product5_con.style.left = "3%";
	     get_all_product5_con.style.top = "52%";
	
	     get_all_sub2_con.appendChild(get_all_product2_con);
	     get_all_product2_con.style.left = "52%";
	     get_all_product2_con.style.top = "52%";
	
	
	
	     get_all_sub3_con.appendChild(get_all_product10_con);
	     get_all_product10_con.style.left = "3%";
	     get_all_product10_con.style.top = "3%";
	
	     get_all_sub3_con.appendChild(get_all_product7_con);
	     get_all_product7_con.style.left = "52%";
	     get_all_product7_con.style.top = "3%";
	
	     get_all_sub3_con.appendChild(get_all_product6_con);
	     get_all_product6_con.style.left = "3%";
	     get_all_product6_con.style.top = "52%";
	
	     get_all_sub3_con.appendChild(get_all_product9_con);
	     get_all_product9_con.style.left = "52%";
	     get_all_product9_con.style.top = "52%";
		
		} else if (change == "price") {
			
			page1();
			
			get_all_sub_con.appendChild(get_all_product9_con);
	 	   get_all_product9_con.style.left = "3%";
	        get_all_product9_con.style.top = "3%";
	
	        get_all_sub_con.appendChild(get_all_product5_con);
	 	   get_all_product5_con.style.left = "52%";
	        get_all_product5_con.style.top = "3%";
	
	        get_all_sub_con.appendChild(get_all_product11_con);
	 	   get_all_product11_con.style.left = "3%";
	        get_all_product11_con.style.top = "52%";
	
	        get_all_sub_con.appendChild(get_all_product6_con);
	 	   get_all_product6_con.style.left = "52%";
	        get_all_product6_con.style.top = "52%";
	
	
	       
	        get_all_sub2_con.appendChild(get_all_product2_con);
	 	   get_all_product2_con.style.left = "3%";
	        get_all_product2_con.style.top = "3%";
	
	        get_all_sub2_con.appendChild(get_all_product7_con);
	 	   get_all_product7_con.style.left = "52%";
	        get_all_product7_con.style.top = "3%";
	
	        get_all_sub2_con.appendChild(get_all_product8_con);
	 	   get_all_product8_con.style.left = "3%";
	        get_all_product8_con.style.top = "52%";
	
	        get_all_sub2_con.appendChild(get_all_product4_con);
	 	   get_all_product4_con.style.left = "52%";
	        get_all_product4_con.style.top = "52%";
	
	
	
	        get_all_sub3_con.appendChild(get_all_product1_con);
	 	   get_all_product1_con.style.left = "3%";
	        get_all_product1_con.style.top = "3%";
	
	        get_all_sub3_con.appendChild(get_all_product3_con);
	 	   get_all_product3_con.style.left = "52%";
	        get_all_product3_con.style.top = "3%";
	
	        get_all_sub3_con.appendChild(get_all_product10_con);
	 	   get_all_product10_con.style.left = "3%";
	        get_all_product10_con.style.top = "52%";
	
	        get_all_sub3_con.appendChild(get_all_product12_con);
	 	   get_all_product12_con.style.left = "52%";
	        get_all_product12_con.style.top = "52%";
			
        } else {
        	
            page1();
			
			get_all_sub_con.appendChild(get_all_product1_con);
	 	   get_all_product1_con.style.left = "3%";
	        get_all_product1_con.style.top = "3%";
	
	        get_all_sub_con.appendChild(get_all_product2_con);
	 	   get_all_product2_con.style.left = "52%";
	        get_all_product2_con.style.top = "3%";
	       
	        get_all_sub_con.appendChild(get_all_product3_con);
	 	   get_all_product3_con.style.left = "3%";
	        get_all_product3_con.style.top = "52%";
	
	        get_all_sub_con.appendChild(get_all_product4_con);
	 	   get_all_product4_con.style.left = "52%";
	        get_all_product4_con.style.top = "52%";
	
	
	
	        get_all_sub2_con.appendChild(get_all_product5_con);
	 	   get_all_product5_con.style.left = "3%";
	        get_all_product5_con.style.top = "3%";
	
	        get_all_sub2_con.appendChild(get_all_product6_con);
	 	   get_all_product6_con.style.left = "52%";
	        get_all_product6_con.style.top = "3%";
	
	        get_all_sub2_con.appendChild(get_all_product7_con);
	 	   get_all_product7_con.style.left = "3%";
	        get_all_product7_con.style.top = "52%";
	
	        get_all_sub2_con.appendChild(get_all_product8_con);
	 	   get_all_product8_con.style.left = "52%";
	        get_all_product8_con.style.top = "52%";
	
	
	
	        get_all_sub3_con.appendChild(get_all_product9_con);
	 	   get_all_product9_con.style.left = "3%";
	        get_all_product9_con.style.top = "3%";
	
	        get_all_sub3_con.appendChild(get_all_product10_con);
	 	   get_all_product10_con.style.left = "52%";
	        get_all_product10_con.style.top = "3%";
	
	        get_all_sub3_con.appendChild(get_all_product11_con);
	 	   get_all_product11_con.style.left = "3%";
	        get_all_product11_con.style.top = "52%";
	
	        get_all_sub3_con.appendChild(get_all_product12_con);
	 	   get_all_product12_con.style.left = "52%";
	        get_all_product12_con.style.top = "52%";
			 
			}
	}
	
	
	
	
 //Next page selection
getPage1.addEventListener('click', function() {
	page1();
});

getPage2.addEventListener('click', function() {
	page2();
});

getPage3.addEventListener('click', function() {
	page3();
});



//view product listener
product1Img.addEventListener('click', function() {
			 
   localStorage.setItem("productTransfer", JSON.stringify(product1));
   window.location.href = "view-products.html";
});

product2Img.addEventListener('click', function() {
			 
   localStorage.setItem("productTransfer", JSON.stringify(product2));
   window.location.href = "view-products.html";
});

product3Img.addEventListener('click', function() {
			 
   localStorage.setItem("productTransfer", JSON.stringify(product3));
   window.location.href = "view-products.html";
});

product4Img.addEventListener('click', function() {
			 
   localStorage.setItem("productTransfer", JSON.stringify(product4));
   window.location.href = "view-products.html";
});



product5Img.addEventListener('click', function() {
			 
   localStorage.setItem("productTransfer", JSON.stringify(product5));
   window.location.href = "view-products.html";
});

product6Img.addEventListener('click', function() {
			 
   localStorage.setItem("productTransfer", JSON.stringify(product6));
   window.location.href = "view-products.html";
});

product7Img.addEventListener('click', function() {
			 
   localStorage.setItem("productTransfer", JSON.stringify(product7));
   window.location.href = "view-products.html";
});

product8Img.addEventListener('click', function() {
			 
   localStorage.setItem("productTransfer", JSON.stringify(product8));
   window.location.href = "view-products.html";
});



product9Img.addEventListener('click', function() {
			 
   localStorage.setItem("productTransfer", JSON.stringify(product9));
   window.location.href = "view-products.html";
});

product10Img.addEventListener('click', function() {
			 
   localStorage.setItem("productTransfer", JSON.stringify(product10));
   window.location.href = "view-products.html";
});

product11Img.addEventListener('click', function() {
			 
   localStorage.setItem("productTransfer", JSON.stringify(product11));
   window.location.href = "view-products.html";
});

product12Img.addEventListener('click', function() {
			 
   localStorage.setItem("productTransfer", JSON.stringify(product12));
   window.location.href = "view-products.html";
});

