const setWidthProjects = function() {
  let elems = document.getElementsByClassName('project');

  for (let i = 0; i < elems.length; i++) {
    let width = elems[i].clientWidth;
    elems[i].style.height = width + 'px';
  }
};

let slideIndex = 1;

const setArrows = function(elem) {
  try {
    let height = elem.clientHeight;
    let newHeight = ((height / 2.0) + 20) + 'px';

    let prev = document.getElementById('prev');
    let next = document.getElementById('next');

    prev.style.top = newHeight;
    next.style.top = newHeight;
  } catch(e) {
    return;
  }
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

const showMenu = function() {
  document.getElementById("mobile-navigation").classList.toggle("show");
};

const main = function() {
  setWidthProjects();
  window.addEventListener("resize", setWidthProjects);
  window.addEventListener("resize", () => setArrows(document.getElementsByClassName("slideshow-element")[slideIndex-1]));
  window.addEventListener("resize", () => { if(window.outerWidth > 800) {  document.getElementById("mobile-navigation").classList.remove("show"); }});

  try {
    showSlide(slideIndex);
  } catch(e) {
    return;
  }
};

setWidthProjects();
window.onload = main;
