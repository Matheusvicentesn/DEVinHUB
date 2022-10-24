// dark mode
function darkMode() {
  const element = document.body;
  const button = document.getElementById("theme-button");
  const img = document.getElementById("devinhub");
  console.log(img.src);

  element.classList.toggle("dark-mode");
  button.classList.toggle("ri-sun-line");

  if (img.src === "assets/img/logo1.png") {
    img.src = "assets/img/logo1.png";
  } else {
    img.src = "assets/img/logo2.png";
  }
}

// Scrol Horizontal
const container_1 = document.querySelector(".container_1");

container_1.addEventListener("wheel", (event) => {
  event.preventDefault();

  container_1.scrollBy({
    left: event.deltaY < 0 ? -30 : 30,
  });
});

const container_2 = document.querySelector(".container_2");

container_2.addEventListener("wheel", (event) => {
  event.preventDefault();

  container_2.scrollBy({
    left: event.deltaY < 0 ? -30 : 30,
  });
});

const container_3 = document.querySelector(".container_3");

container_3.addEventListener("wheel", (event) => {
  event.preventDefault();

  container_3.scrollBy({
    left: event.deltaY < 0 ? -30 : 30,
  });
});
