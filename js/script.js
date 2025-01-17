"use strict";

const btn = document.getElementById("btn");
const overlay = document.getElementById("overlay");
const modalBtn = document.getElementById("modal__btn");

btn.onclick = () => overlay.classList.add("show");
modalBtn.onclick = () => overlay.classList.remove("show");

window.onclick = (event) => {
	if (event.target === overlay) {
		overlay.classList.remove("show");
	}
};

document.onkeyup = (event) => {
	if (event.key === "Escape") {
		overlay.classList.remove("show");
	}
};
