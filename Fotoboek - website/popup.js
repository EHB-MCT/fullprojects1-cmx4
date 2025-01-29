document.addEventListener("DOMContentLoaded", function () {
	// Selecteer elementen
	var modal = document.getElementById("myModal");
	var btn = document.getElementById("myBtn");
	var closeBtn = document.querySelector(".close");

	// Open pop-up bij klik op knop
	btn.onclick = function () {
		modal.style.display = "block";
	};

	// Sluit pop-up bij klik op de X
	closeBtn.onclick = function () {
		modal.style.display = "none";
	};

	// Sluit pop-up als gebruiker buiten de modal klikt
	window.onclick = function (event) {
		if (event.target === modal) {
			modal.style.display = "none";
		}
	};
});
