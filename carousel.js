let slideIndex = 0;
const photos = [
  {
    src: 'images/Inner photos/Caderninhos.jpg',
    title: 'Encontro com as professoras',
    description: 'Sempre me enche o coração poder me encontrar com mulheres que cuidaram tanto de mim. Esse presente, entregue pela incrível professora Luciana Battelli é a representação das memórias mais doces que poderia ter, o privilégio de ter sido aluna dela. Tudo que sou hoje, e a coragem que preciso para seguir em frente, devo a ela.'
  },
  {
    src: 'images/Inner photos/conchinhas.jpg',
    title: 'Conchinas',
    description: 'Eu amo ir a praia, e sempre que posso, trago um pedacinho dela comigo. Essas conchinhas foram encontradas em uma das minhas viagens ao litoral, e são um dos meus itens de decoração favoritos.'
  },
  {
    src: 'images/Inner photos/Tucano.jpg',
    title: 'Resgate da Penelope',
    description: 'Essa gatinha foi resgatada por mim e minha madrinha, no final de 2023. Essa foi a primeira foto que eu tirei dela, quando melhorou. Pouco maior do que o tamanho do tucano de pelucia da Kinder xD'
  },
  {
    src: 'images/Inner photos/Primeira viagem RIO.jpg',
    title: 'Primeira viagem ao Rio',
    description: 'Eu nunca tive a oportunidade de viajar muito, mas em 2024 isso mudou um pouco. Essa foi uma das vistas mais lindas que já vi.'
  },
  {
    src: 'images/Inner photos/Prateleira maneira.jpg',
    title: 'Prateleira maneira',
    description: 'Essa prateleira foi o primeiro item que adicionei no meu quarto pós mudança. A ideia era ter um espaço para colocar meus livros, cadernos e itens de decoração, tudo que me lembrasse daquilo que amo.'
  },
  {
    src: 'images/Inner photos/CEIC passeio.jpg',
    title: 'Passeio no CEIC',
    description: 'Dificilmente trabalho no CEIC (Centro Empresarial Itaú Conceição). Esse dia em específico, resolvi visitar a exposição dentro do prédio e acabei tirando essa foto.'
  },
  {
    src: 'images/Inner photos/Magali.jpg',
    title: 'Magali',
    description: 'Pouco antes da minha mudança em 2023, tirei essa foto da minha gatinha Magali. Quando me mudei, infelizmente precisei deixá-la com a minha madrinha. Ela claramente tinha comportamentos unicos.'
  },
  {
    src: 'images/Inner photos/Aniversario.jpg',
    title: 'Supresinha de aniversário',
    description: 'A Mari é minha melhor amiga, e sempre que pode, faz algo especial para mim. Digo isso porque ela nunca deixa de fazer minha vida mais feliz. Esse bolinho foi uma das coisas mais fofas que ela já fez.'
  },
  {
    src: 'images/Inner photos/Bazar do Bizarro.jpg',
    title: 'Bazar do Bizarro',
    description: 'Adoro ter amigos artistas. Stênio sempre me surpreende de maneira positiva. Psicodélico e lindo, um quadrinho que aproveitei do inicio ao fim.'
  },
  {
    src: 'images/Inner photos/Bob esponja.jpg',
    title: 'Despedida com Bob Esponja',
    description: 'Uma ideia que claramente não poderia ter saído de outro lugar senão minha amiga Fabi. Pertinho do Itau da Faria Lima temos esse restaurante que para minha supresa foi ótimo, vazio e super divertido. Tirando a parte de que eles não tem comida vegana de dia, apenas de noite (sinto muito amiga Lais).'
  },
  {
    src: 'images/Inner photos/Equipe nova.jpg',
    title: 'Chegando em Trade Services',
    description: 'Essa foto foi tirada no meu primeiro mês de trabalho na Trade Services. A equipe foi incrível comigo, e todos já me ajudaram a me sentir em casa.'
  }
];

function createCarouselItem(photo) {
  // Cria um item de carrossel para uma foto
  const item = document.createElement('div');
  item.className = 'carousel-item';
  item.innerHTML = `
    <div class="carousel-content">
      <div class="photo-section">
        <div class="polaroid-frame">
          <img src="images/polaroid-frame.png" alt="${photo.title}" class="photo">
          <div class="inner-photo-container">
            <img src="${photo.src}" alt="${photo.title}" class="inner-photo">
          </div>
        </div>
      </div>
      <div class="description-section">
        <h2 class="photo-title">${photo.title}</h2>
        <p class="photo-description">${photo.description}</p>
      </div>
    </div>
  `;
  return item;
}

document.addEventListener('DOMContentLoaded', () => {
  // Carrega o carrossel e exibe o slide inicial quando o documento estiver carregado
  loadCarousel();
  showSlide(slideIndex);
});

function loadCarousel() {
  // Carrega todas as fotos no carrossel
  const carousel = document.querySelector('.carousel');
  photos.forEach(photo => {
    const item = createCarouselItem(photo);
    carousel.appendChild(item);
  });
}

function showSlide(index) {
  // Exibe o slide no índice especificado
  const slides = document.querySelectorAll('.carousel-item');

  // Determina a direção da animação com base no índice do slide
  const direction = index > slideIndex ? 'slide-left' : 'slide-right';

  // Adiciona a classe de animação ao slide atual
  slides[slideIndex].classList.add(direction);

  setTimeout(() => {
    // Remove a classe ativa e de animação do slide atual
    slides[slideIndex].classList.remove('active', 'slide-left', 'slide-right');
    slides[slideIndex].classList.add('hidden');

    // Exibe o novo slide
    slides[index].classList.remove('hidden');
    slides[index].classList.add('active');

    // Atualiza o índice do slide atual
    slideIndex = index;
  }, 500);
}

function changeSlide(n) {
  // Muda para o próximo ou anterior slide com base no valor de n
  const slides = document.querySelectorAll('.carousel-item');
  let newIndex = slideIndex + n;
  if (newIndex >= slides.length) {
    newIndex = 0;
  } else if (newIndex < 0) {
    newIndex = slides.length - 1;
  }
  showSlide(newIndex);
}
