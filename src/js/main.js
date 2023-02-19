// ----- lazy-load -----
const LazyLoad = require('./lazy-load/lazyload.min.js'); 
var lazyLoadInstance = new LazyLoad({
  elements_selector: ".lazy"
});
// ----- /lazy-load -----
// ----- nav -----
const menu = document.querySelector('.nav');
const menuBtn = document.querySelector('.nav-icon');
const body = document.body;
if (menu && menuBtn) {
	menuBtn.addEventListener('click', () => {
		menu.classList.toggle('nav-active');
		menuBtn.classList.toggle('nav-active');
		body.classList.toggle('body-lock');
	});
	menu.querySelectorAll('.menu__link').forEach(link => {
		link.addEventListener('click', () => {
			menu.classList.remove('nav-active');
			menuBtn.classList.remove('nav-active');
			body.classList.remove('body-lock');
		})
	});
};
// ----- /nav -----