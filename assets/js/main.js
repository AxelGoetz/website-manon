const setWidthProjects = function() {
  let elems = document.getElementsByClassName('project');

  for (let i = 0; i < elems.length; i++) {
    let width = elems[i].clientWidth;
    elems[i].style.height = width + 'px';
  }
};

let slideIndex = 1;

const setArrows = function(elem) {
  let height = elem.clientHeight;
  let newHeight = ((height / 2.0) + 20) + 'px';

  let prev = document.getElementById('prev');
  let next = document.getElementById('next');

  prev.style.top = newHeight;
  next.style.top = newHeight;
};

const nextSlide = function(n) {
  showSlide(slideIndex += n);
};

const currentSlide = function(n) {
  showSlide(slideIndex = n);
};

const showSlide = function(n) {
  let i;
  let slides = document.getElementsByClassName("slideshow-element");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) { slideIndex = 1; }
  if (n < 1) { slideIndex = slides.length; }
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";

  setArrows(slides[slideIndex - 1]);
};

const main = function() {
  setWidthProjects();
  window.addEventListener("resize", setWidthProjects);
  window.addEventListener("resize", () => setArrows(document.getElementsByClassName("slideshow-element")[slideIndex-1]));

  try {
    showSlide(slideIndex);
  } catch(e) {
    return;
  }
};

main();
