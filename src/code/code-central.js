function ativarMenu(){
  const menubarAtivar = document.getElementById('menu-bar-responsive-ativar');
  const divMenu = document.getElementById('menu-active');
  divMenu.style.display = 'flex';
}

function fecharMenu(){
  const divMenu = document.getElementById('menu-active');
  divMenu.style.display = 'none';
}

const spanElement = document.getElementById('dev-type');
const texts = ['WEB', 'BACK-END']; // Palavras para alternar
let index = 0;
let intervalId;

function type() {
  spanElement.textContent = ''; // Limpa o texto
  let currentText = texts[index];
  let i = 0;

  function typingEffect() {
      if (i < currentText.length) {
          spanElement.textContent += currentText.charAt(i);
          i++;
          setTimeout(typingEffect, 150); // Velocidade da digitação
      }
  }

  typingEffect();
  index = (index + 1) % texts.length; // Troca entre "WEB" e "BACK-END"
}

// Nova função: checa o tamanho da tela
function checkScreenSize() {
  if (window.innerWidth <= 767) {
      // Se for mobile, para a animação
      clearInterval(intervalId);
      spanElement.textContent = 'WEB'; // Deixa um texto fixo
  } else {
      // Se for desktop, inicia a animação
      if (!intervalId) {
          type(); // dispara a primeira vez para não ficar vazio
          intervalId = setInterval(type, 2000);
      }
  }
}

// Quando a página carregar, checa o tamanho
window.addEventListener('load', checkScreenSize);

// Se redimensionar a tela, também checa
window.addEventListener('resize', function() {
  clearInterval(intervalId); // Limpa o intervalo atual
  intervalId = null;
  checkScreenSize(); // Checa de novo
});

// Inicia a primeira vez
intervalId = setInterval(type, 2000);


function irParaPagina(){
  window.location.href = "#projetos";



}
function irParaPagina2(){
  window.location.href = "#contato";



}

function baixarCurriculo() {
  window.location.href = "src/code/Curriculo.pdf";
}



ScrollReveal().reveal(".left-main", {
  origin: "left",
  duration: 2000,
  distance: "5%",
});

ScrollReveal().reveal(".height-main", {
  origin: "right",
  duration: 2000,
  distance: "5%",
});

ScrollReveal().reveal(".title-habilidades", {
  origin: "top",
  duration: 2000,
  distance: "5%",
});

ScrollReveal().reveal(".habilidades-geral", {
  origin: "top",
  duration: 2000,
  distance: "5%",
});
ScrollReveal().reveal(".projeto-geral-unico", {
  origin: "left",
  duration: 2000,
  distance: "5%",
});

ScrollReveal().reveal(".contato-geral", {
  origin: "top",
  duration: 2000,
  distance: "5%",
});
ScrollReveal().reveal("footer", {
  origin: "top",
  duration: 2000,
  distance: "5%",
});

ScrollReveal().reveal(".title-sobre", {
  origin: "top",
  duration: 2000,
  distance: "5%",
});