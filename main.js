document.addEventListener("DOMContentLoaded", () => {
  const images = document.querySelectorAll(".image-box img");
  const input = document.getElementById("searchInput");

  // Manejo del clic en imágenes
  images.forEach((img) => {
    img.addEventListener("click", () => {
      img.classList.toggle("selected");

      const letter = img.closest(".item").querySelector(".letter").textContent;

      if (img.classList.contains("selected")) {
        // Agrega la letra al input si no está ya
        if (!input.value.includes(letter)) {
          input.value += letter;
        }
      } else {
        // Quita la letra del input
        input.value = input.value.replace(new RegExp(letter, "g"), "");
      }
    });
  });

  // Manejo del input manual
  input.addEventListener("input", () => {
    const typedLetters = input.value.toUpperCase().split("");

    images.forEach((img) => {
      const letter = img.closest(".item").querySelector(".letter").textContent;

      if (typedLetters.includes(letter)) {
        img.classList.add("selected");
      } else {
        img.classList.remove("selected");
      }
    });
  });

  const resetButton = document.getElementById("resetButton");

  resetButton.addEventListener("click", () => {
    images.forEach((img) => img.classList.remove("selected"));
    input.value = "";
  });
});
