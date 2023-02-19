// const body = document.querySelector('body');

const cursor = document.querySelector('#cursor');
const cursorAura = document.querySelector('#cursor-aura');

const h1 = document.querySelectorAll('h1');
const p = document.querySelectorAll('p');

document.addEventListener('mousemove', (e) => {
	cursor.style.cssText = cursorAura.style.cssText = "left: " + e.clientX + "px; top: " + e.clientY + "px;";
	// cursor.classList.remove('hidden-cursor');
	// cursorAura.classList.remove('hidden-cursor');
})

for (let i = 0; i < h1.length; i++) {

	h1[i].addEventListener('mouseover', () => {
		cursor.classList.add('active-cursor')
		cursorAura.classList.add('active-cursor')
	})

	h1[i].addEventListener('mouseout', () => {
		cursor.classList.remove('active-cursor')
		cursorAura.classList.remove('active-cursor')
	})

};

for (let i = 0; i < p.length; i++) {

	p[i].addEventListener('mouseover', () => {
		cursor.classList.add('active-cursor')
		cursorAura.classList.add('active-cursor')
	})

	p[i].addEventListener('mouseout', () => {
		cursor.classList.remove('active-cursor')
		cursorAura.classList.remove('active-cursor')
	})

};

// body.addEventListener('mouseout', () => {
// 	cursor.classList.add('hidden-cursor');
// 	cursorAura.classList.add('hidden-cursor');
// })