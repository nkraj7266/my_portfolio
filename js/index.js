AOS.init();

var typed = new Typed("#typing", {
	strings: ["Web Developer", "Graphic Designer"],
	typeSpeed: 180,
	backSpeed: 50,
	loop: true,
});

const hamburgerMenu = document.querySelector(".hamburger-menu");
const mobileMenu = document.querySelector(".mobile-menu");
const frontPage = document.querySelector(".header");

const toggleMenu = () => {
	mobileMenu.classList.toggle("menu-active");
	hamburgerMenu.classList.toggle("hamburger-clicked");
};

let flag = 0;

hamburgerMenu.addEventListener("click", () => {
	flag = 1;
	toggleMenu();
});

window.addEventListener("scroll", () => {
	if (flag === 1) {
		flag = 0;
		toggleMenu();
	}
});

// const about = document.querySelector(".about");
// const projects = document.querySelector(".projects");

// const aboutbtn = document.querySelector(".about-btn");
// const projectsbtn = document.querySelector(".projects-btn");

// projectsbtn.addEventListener("click", function () {
// 	aboutbtn.classList.remove("active-btn");
// 	projectsbtn.classList.add("active-btn");
// 	about.classList.add("inactive");
// 	projects.classList.remove("inactive");
// });

// aboutbtn.addEventListener("click", function () {
// 	aboutbtn.classList.add("active-btn");
// 	projectsbtn.classList.remove("active-btn");
// 	about.classList.remove("inactive");
// 	projects.classList.add("inactive");
// });
