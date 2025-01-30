let slideIndexMemory2 = 1;
showSlidesMemory2(slideIndexMemory2);

function plusSlidesMemory2(n) {
	showSlidesMemory2((slideIndexMemory2 += n));
}

function currentSlideMemory2(n) {
	showSlidesMemory2((slideIndexMemory2 = n));
}

function showSlidesMemory2(n) {
	let i;
	let slides = document.getElementsByClassName("slideshow2");
	let dots = document.getElementsByClassName("dot_Memory2");
	if (n > slides.length) {
		slideIndexMemory2 = 1;
	}
	if (n < 1) {
		slideIndexMemory2 = slides.length;
	}
	for (i = 0; i < slides.length; i++) {
		slides[i].classList.remove("show"); // Verwijder de 'show' klasse van alle slides
	}

	for (i = 0; i < dots.length; i++) {
		dots[i].className = dots[i].className.replace(" active", "");
	}
	slides[slideIndexMemory2 - 1].classList.add("show"); // Voeg de 'show' klasse toe aan de actieve slide
	dots[slideIndexMemory2 - 1].className += " active";
}
