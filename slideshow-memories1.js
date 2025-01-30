let slideIndexMemory5 = 1;
showSlidesMemory5(slideIndexMemory5);

function plusSlidesMemory5(n) {
	showSlidesMemory5((slideIndexMemory5 += n));
}

function currentSlideMemory5(n) {
	showSlidesMemory5((slideIndexMemory5 = n));
}

function showSlidesMemory5(n) {
	let i;
	let slides = document.getElementsByClassName("slideshow3");
	let dots = document.getElementsByClassName("dot_Memory5");
	if (n > slides.length) {
		slideIndexMemory5 = 1;
	}
	if (n < 1) {
		slideIndexMemory5 = slides.length;
	}
	for (i = 0; i < slides.length; i++) {
		slides[i].classList.remove("show"); // Verwijder de 'show' klasse van alle slides
	}

	for (i = 0; i < dots.length; i++) {
		dots[i].className = dots[i].className.replace(" active", "");
	}
	slides[slideIndexMemory5 - 1].classList.add("show"); // Voeg de 'show' klasse toe aan de actieve slide
	dots[slideIndexMemory5 - 1].className += " active";
}
