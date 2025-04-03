document.addEventListener("DOMContentLoaded", () => {
  const menuButton = document.querySelector(".menu");
  const nav = document.querySelector(".nav");
  const slides = document.querySelectorAll(".fotos");
  let currentSlide = 0;

  // Variáveis para rastrear o toque
  let touchStartX = 0;
  let touchCurrentX = 0;

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

  // Eventos de toque para arrastar
  nav.addEventListener("touchstart", (e) => {
    touchStartX = e.touches[0].clientX; // Pega a posição inicial do toque
  });

  nav.addEventListener("touchmove", (e) => {
    touchCurrentX = e.touches[0].clientX; // Atualiza a posição atual do toque
    const diff = touchCurrentX - touchStartX; // Calcula a diferença

    // Se arrastar para a esquerda (diff < 0), move o menu dinamicamente
    if (nav.classList.contains("nav-active") && diff < 0) {
      nav.style.left = `${diff}px`; // Move o menu conforme o dedo
    }
  });

  nav.addEventListener("touchend", () => {
    const diff = touchCurrentX - touchStartX;

    // Se arrastou mais de 100px para a esquerda, fecha o menu
    if (diff < -100) {
      nav.classList.remove("nav-active");
      nav.style.left = ""; // Reseta o estilo inline para o CSS controlar
    } else {
      // Se não arrastou o suficiente, volta à posição inicial
      nav.style.left = nav.classList.contains("nav-active") ? "0" : "-50vw";
    }
  });

  // Código do carrossel (mantido igual)
  function showNextSlide() {
    slides[currentSlide].classList.remove("active");
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add("active");
  }

  setInterval(showNextSlide, 3000);
});
