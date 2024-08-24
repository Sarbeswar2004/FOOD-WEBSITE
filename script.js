let menu = document.querySelector("#menu-bars");
let navbar = document.querySelector(".navbar");

menu.onclick = () =>{
	menu.classlist.toggle("fa-times");
	navbar.classlist.toggle("active");
}
let section = document.querySelectorAll("section");
let navlinks = document.querySelectorAll("header .navbar a");
window.onscroll = () =>{
	menu.classlist.remove("fa-times");
	navbar.classlist.remove("active");
	section.forEach(sec =>{
		let top = window.scrollY;
		let height =sec.offsetHeight;
		let offset =sec.offsetTop -150;

		if(top => offset && top < offset + height){
			navlinks.forEach(links =>{
				links.classlist.remove("active");
				document.querySelector("header .navbar a[href*="+id+"]").classlist.add("active");
			});
		};
	});
}
document.querySelector("#search-icon").onclick = () =>{
	document.querySelector("#search-form").classlist.toggle("active");
}
document.querySelector("#close").onclick = () =>{
	document.querySelector("#search-form").classlist.remove("active");
}
var swiper = new Swiper(".home-slider",{
	spaceBetween:30,
	centeredSlides:true,
	autoplay:{
		delay:7500,
		disableOnInteraction:false,
	},
	pagination:{
		el:"swiper-pagination",
		clickable:true,
	},
	loop:true,
});
var swiper = new Swiper(".review-slider",{
	spaceBetween:20,
	centeredSlides:true,
	autoplay:{
		delay:7500,
		disableOnInteraction:false,
	},
	loop:true,
	breakpoints:{
		0:{
			slidesPerView: 1;
		},
		640:{
			slidesPerView: 2;
		},
		768:{
			slidesPerView: 1;
		},
		1024:{
			slidesPerView: 2;
		},
	},
});

function loader(){
	document.querySelector(".loader-container").classlist.add("fade-out");
}

function fadeOut(){
	setInterval(loader,3000);
}
window.onload = fadeOut;



























