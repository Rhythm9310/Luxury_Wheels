// Sticky Navbar
window.addEventListener("scroll", function () {
  let header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
});

// Toggle Nav
function toggleMenu() {
  if (window.innerWidth <= 800) {
    let menu = document.querySelector(".menu");
    menu.classList.toggle("active");

    let toggle = document.querySelector(".toggle");
    toggle.classList.toggle("active");
  }
}


// update current year
// window.onload = function() {
//   const currentYearEl = document.querySelector("#currentYear");
//   if(currentYearEl) {currentYearEl.innerText = new Date().getFullYear();}
// }

function showSlides(slideshowId, interval) {
  let slideIndex = 0;
  const slides = document.querySelectorAll(`#${slideshowId} .img-container`);

  function displaySlide() {
      for (let i = 0; i < slides.length; i++) {
          slides[i].style.display = "none";
      }
      slideIndex++;
      if (slideIndex > slides.length) {slideIndex = 1}
      slides[slideIndex - 1].style.display = "block";
      setTimeout(displaySlide, interval);
  }

  displaySlide();
}

document.querySelectorAll('.faq-question').forEach((button) => {
  button.addEventListener('click', () => {
      const faqItem = button.parentElement;
      faqItem.classList.toggle('active');
  });
});

showSlides("slideshow1", 3000);
showSlides("slideshow2", 3000);
showSlides("slideshow3", 3000);
showSlides("slideshow4", 3000);
showSlides("slideshow5", 3000);
showSlides("slideshow6", 3000);