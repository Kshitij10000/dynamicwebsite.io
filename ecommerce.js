
const close = document.querySelector(".close");
const open = document.querySelector(".ham");
const menu = document.querySelector(".menu");

close.addEventListener("click", () => {
  menu.style.visibility = "hidden";
});

open.addEventListener("click", () => {
  menu.style.visibility = "visible";
});


const productCards = document.querySelectorAll('.items');
productCards.forEach(card => {
  card.addEventListener('mouseover', () => {
    card.style.transform = 'scale(1.05)';
    card.style.transition = 'transform 0.3s';
  });

  card.addEventListener('mouseout', () => {
    card.style.transform = 'scale(1)';
  });
});


const buyNowButtons = document.querySelectorAll(".buy-now-btn");
buyNowButtons.forEach(button => {
  button.addEventListener("click", () => {
    alert("Product added to cart! Check out on Amazon.");
  });
});
