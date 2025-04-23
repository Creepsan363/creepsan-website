const transferValue = localStorage.getItem("productTransfer");

const productImg = document.querySelector("#product1-img");
const productName = document.querySelector("#product1-name-txt");
const productPrice = document.querySelector("#product1-price-txt");
const productRating = document.querySelector("#product1-rating");
const productDescription = document.querySelector("#description-content-txt");


let extract = JSON.parse(transferValue);



if (transferValue) {
	productImg.src = extract.image;
	productName.innerHTML = extract.name;
	productPrice.innerHTML = extract.price;
	productRating.src = extract.rating;
	productDescription.innerHTML = extract.description;
	
	localStorage.removeItem("productTransfer");
	}