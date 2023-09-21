const carouselItems = document.querySelectorAll('.item');
const rightBtns = document.querySelectorAll('.btnRight');
const leftBtns = document.querySelectorAll('.btnLeft');
let counter = 0;

function reset() {
  carouselItems.forEach((item) => {
    item.style.display = 'none';
  });
}

function startSlide() {
  reset();
  carouselItems[0].style.display = 'block';
}

function nextSlide() {
  reset();
  if (counter == carouselItems.length - 1) {
    counter = -1;
  }
  carouselItems[counter + 1].style.display = 'block';
  counter++;
}
function prevSlide() {
  reset();
  if (counter == 0) {
    counter = carouselItems.length;
  }
  carouselItems[counter - 1].style.display = 'block';
  counter--;
}

rightBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    nextSlide();
  });
});

leftBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    prevSlide();
  });
});

startSlide();
