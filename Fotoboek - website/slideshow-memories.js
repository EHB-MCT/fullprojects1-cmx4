let slideIndexMemory1 = 1;
showSlidesMemory1(slideIndexMemory1);

function plusSlidesMemory1(n) {
	showSlidesMemory1((slideIndexMemory1 += n));
}

function currentSlideMemory1(n) {
	showSlidesMemory1((slideIndexMemory1 = n));
}

function showSlidesMemory1(n) {
	let i;
	let slides = document.getElementsByClassName("slideshow1");
	let dots = document.getElementsByClassName("dot_memory1");
	if (n > slides.length) {
		slideIndexMemory1 = 1;
	}
	if (n < 1) {
		slideIndexMemory1 = slides.length;
	}
	for (i = 0; i < slides.length; i++) {
		slides[i].classList.remove("show");
	}

	for (i = 0; i < dots.length; i++) {
		dots[i].className = dots[i].className.replace(" active", "");
	}
	slides[slideIndexMemory1 - 1].classList.add("show");
	dots[slideIndexMemory1 - 1].className += " active";
}
