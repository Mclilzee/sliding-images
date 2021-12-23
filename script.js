let activeImage = 0;

const reader = new FileReader();
console.log(reader);

const form = document.querySelector("form");
const imagesCount = document.querySelectorAll("img").length - 1;

for (let i = 0; i <= imagesCount; i++) {
  const radioButton = document.createElement("input");
  radioButton.type = "radio";
  radioButton.name = "radio";
  radioButton.dataset.index = i;

  form.appendChild(radioButton);
}

const radioButton = (document.querySelector(
  `[data-index="0"]`
).checked = true);

document.querySelector(".swapButtons").addEventListener("click", swap);

form.addEventListener("change", (e) => {
  document.getElementById(activeImage).classList.remove("visible");

  activeImage = Number(e.target.dataset.index);
  document.getElementById(activeImage).classList.add("visible");
});

function swap(e) {
  document.getElementById(activeImage).classList.remove("visible");

  if (e.target.id === "swapRight") {
    activeImage = activeImage === imagesCount ? 0 : activeImage + 1;
  } else {
    activeImage = activeImage === 0 ? imagesCount : activeImage - 1;
  }

  document.querySelector(`[data-index="${activeImage}"]`).checked = true;

  document.getElementById(activeImage).classList.add("visible");
}
