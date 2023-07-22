const carouselContainer = document.querySelector('.carousel-container');
const carousel = carouselContainer.querySelector('.carousel');
const slidesContainer = carousel.querySelector('.slides');
const slides = Array.from(slidesContainer.querySelectorAll('.carousel-image'));
const slideIndicatorsContainer = carouselContainer.querySelector('.slide-indicators');


let slideIndex = 0;
const slideDuration = 3000;
let isMouseDown = false;
let startX = 0;
let scrollLeft = 0;

slidesContainer.style.width = `${slides.length * 100}%`;

function showSlide() {
  slidesContainer.style.transform = `translateX(-${(slideIndex / slides.length) * 100}%)`;

  const activeIndicator = slideIndicatorsContainer.querySelector('.indicator.active');
  if (activeIndicator) {
    activeIndicator.classList.remove('active');
  }
  slideIndicatorsContainer.children[slideIndex].classList.add('active');
}

function nextSlide() {
  slideIndex++;
  if (slideIndex >= slides.length) {
    slideIndex = 0;
  }
  showSlide();
}

function prevSlide() {
  slideIndex--;
  if (slideIndex < 0) {
    slideIndex = slides.length - 1;
  }
  showSlide();
}

slides.forEach((slide, index) => {
  const indicator = document.createElement('div');
  indicator.classList.add('indicator');
  if (index === 0) {
    indicator.classList.add('active');
  }
  indicator.addEventListener('click', () => {
    slideIndex = index;
    showSlide();
  });
  slideIndicatorsContainer.appendChild(indicator);
});

carouselContainer.addEventListener('mousedown', (e) => {
  isMouseDown = true;
  startX = e.pageX - carouselContainer.offsetLeft;
  scrollLeft = carouselContainer.scrollLeft;
  carouselContainer.classList.add('active');
});

carouselContainer.addEventListener('mouseleave', () => {
  isMouseDown = false;
  carouselContainer.classList.remove('active');
});

carouselContainer.addEventListener('mouseup', () => {
  isMouseDown = false;
  carouselContainer.classList.remove('active');
});

carouselContainer.addEventListener('mousemove', (e) => {
  if (!isMouseDown) return;
  e.preventDefault();
  const x = e.pageX - carouselContainer.offsetLeft;
  const walk = (x - startX) * 2; // Adjust the sliding sensitivity as needed
  carouselContainer.scrollLeft = scrollLeft - walk;
});

carouselContainer.addEventListener('touchstart', (e) => {
  isMouseDown = true;
  startX = e.touches[0].clientX - carouselContainer.offsetLeft;
  scrollLeft = carouselContainer.scrollLeft;
  carouselContainer.classList.add('active');
});

carouselContainer.addEventListener('touchmove', (e) => {
  if (!isMouseDown) return;
  e.preventDefault();
  const x = e.touches[0].clientX - carouselContainer.offsetLeft;
  const walk = (x - startX) * 2; // Adjust the sliding sensitivity as needed
  carouselContainer.scrollLeft = scrollLeft - walk;
});

carouselContainer.addEventListener('touchend', () => {
  isMouseDown = false;
  carouselContainer.classList.remove('active');
});

window.addEventListener('resize', () => {
  showSlide();
});

showSlide();
setInterval(nextSlide, slideDuration);
