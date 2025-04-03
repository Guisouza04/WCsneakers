document.addEventListener("DOMContentLoaded", () => {
  const menuButton = document.querySelector(".menu");
  const nav = document.querySelector(".nav");
  const slides = document.querySelectorAll(".fotos");
  let currentSlide = 0;

  // Toggle do menu ao clicar no ícone de hambúrguer
  menuButton.addEventListener("click", (e) => {
    e.stopPropagation();
    nav.classList.toggle("nav-active");
  });

  // Fecha o menu ao clicar fora
  document.addEventListener("click", (e) => {
    if (!nav.contains(e.target) && !menuButton.contains(e.target)) {
      nav.classList.remove("nav-active");
    }
  });

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
