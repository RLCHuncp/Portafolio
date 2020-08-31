const typed = new Typed('.typed', {
    strings: [
        '<i class="nombre">Ruth Campos</i>',
    ],
    stringsElement: '#cadenas-texto',
	typeSpeed: 75,
	startDelay: 300,
	backSpeed: 75,
	smartBackspace: true,
	shuffle: false,
	backDelay: 1500,
	loop: true,
	loopCount: false,
	showCursor: true,
	cursorChar: '|',
	contentType: 'html', 
});
const typeds = new Typed('.typed-2', {
    strings: [
        '<i class="nombre">Front-end Developer</i>',
        '<i class="nombre">Bach. Ingeniería de Sistemas</i>',
    ],
    stringsElement: '#cadenas-texto',
	typeSpeed: 75,
	startDelay: 300,
	backSpeed: 75,
	smartBackspace: true,
	shuffle: false,
	backDelay: 1500,
	loop: true,
	loopCount: false,
	showCursor: true,
	cursorChar: '|',
	contentType: 'html', 
});

// Redes Sociales
const link = 'https://www.linkedin.com/in/ruthcampos'
const facebook = document.getElementById('fb');
facebook.addEventListener('click', () => {
	link();
})