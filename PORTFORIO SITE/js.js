let textSlide = 0;
carousel();

function carousel() {
  let i;
  const text = document.getElementsByClassName("slide-txt");
  for (i = 0; i < text.length; i++) {
    text[i].style.display = "none";
  }
  textSlide++;
  if (textSlide > text.length) {
    textSlide = 1;
  }
  text[textSlide - 1].style.display = "block";
  setTimeout(carousel, 3000);
}