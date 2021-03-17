var header = document.getElementById('header');
var logo = document.getElementById('lo');
var menu = document.getElementById('menu');
var menu = document.querySelectorAll('#menu > a');

window.addEventListener('scroll', function () {
	if (window.scrollY > 100) {
		header.classList.add('animate');
		logo.classList.add('color');
		for(let a; a = 0;a++){
			menu[a].style.
		}
	} else {
		header.classList.remove('animate');
		logo.classList.remove('color');
	}
});
