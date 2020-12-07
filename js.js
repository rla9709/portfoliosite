
// 반응형헤더
const navbar_Btn = document.querySelector('.navbar-Btn');
const navbar_Content = document.querySelector('.navbar-content');

navbar_Btn.addEventListener('click', () => {
  navbar_Content.classList.toggle('active');
});

// 메인텍스트 글자
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
  setTimeout(carousel, 4000);
}

