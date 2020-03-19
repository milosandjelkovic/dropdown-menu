// Select close-btn for an click event
let btnClose = document.querySelector('.close-btn');

// Select open-btn for an click event
let btnOpen = document.querySelector('.open-btn');

// Select h1 for hiding
let h1 = document.querySelector('h1');

// Select main-menu for showing
let mainMenu = document.querySelector('.main-menu');

btnOpen.addEventListener('click', function() {
	btnOpen.classList.toggle('hidden');
	btnClose.classList.toggle('visible');
	h1.classList.toggle('hidden');
	mainMenu.classList.toggle('vertical');
});

btnClose.addEventListener('click', function() {
	btnOpen.classList.toggle('hidden');
	btnClose.classList.toggle('visible');
	h1.classList.toggle('hidden');
	mainMenu.classList.toggle('vertical');
});
