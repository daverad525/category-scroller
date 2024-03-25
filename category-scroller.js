// JavaScript (using vanilla JS)
const contentContainer = document.querySelector('.category-scroller-content');
const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');

const scrollAmount = 200; // Adjust as needed

leftArrow.addEventListener('click', () => {
  contentContainer.scrollBy(-scrollAmount, 0);
});

rightArrow.addEventListener('click', () => {
  contentContainer.scrollBy(scrollAmount, 0);
});
