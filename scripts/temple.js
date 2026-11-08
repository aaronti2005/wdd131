const currentyear = document.querySelector("#currentyear")

const today = new Date();

currentyear.innerHTML = `${today.getFullYear()}`;


const lastModified = document.getElementById("lastModified");
if (lastModified) {
    lastModified.textContent = `Last Modified: ${document.lastModified}`;
}


const hamButton = document.querySelector("#menu");
const navigation = document.querySelector(".nav");

hamButton.addEventListener("click", () => {
	navigation.classList.toggle("open");
	hamButton.classList.toggle("open");
});