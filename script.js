document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll(".fotos");
  let currentSlide = 0;

  function showNextSlide() {
    // Remove a classe active do slide atual
    slides[currentSlide].classList.remove("active");

    // Calcula o próximo slide
    currentSlide = (currentSlide + 1) % slides.length;

    // Adiciona a classe active ao próximo slide
    slides[currentSlide].classList.add("active");
  }

  // Inicia o carrossel mudando a cada 3 segundos (3000ms)
  setInterval(showNextSlide, 3000);
});
