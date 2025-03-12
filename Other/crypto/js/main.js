
$(document).ready(function () {
  $('.reviews__container-list').slick({
    infinite: true,
    slidesToShow: 3,
    initialSlide: 1,
    arrows: false,
    slidesToScroll: 1,
    dots: true,
    appendDots: $('.reviews__dots'),
  });

  $('.blog__slick-list').slick({
    infinite: true,
    slidesToShow: 1,
    initialSlide: 1,
    arrows: false,
    slidesToScroll: 1,
    dots: true,
    appendDots: $('.blog__dots'),
  });


const toggleButtons = document.querySelectorAll('.questions__item');
const content = document.querySelector('.questions__item-desc');

toggleButtons.forEach((toggleButton) =>
  toggleButton.addEventListener("click", function () {
    var idT = toggleButton.id;
    console.log(idT);
    var active = 0;
    if (toggleButton.classList.contains('questions__item-active')) {
      toggleButton.classList.remove('questions__item-active');
      active = 0;
    } else {
      toggleButtons.forEach((btn) => btn.classList.remove('questions__item-active'))
      toggleButton.classList.add('questions__item-active');
      active = 1;
    }
    if (active) {
      toggleButtons.forEach((btn) => btn.querySelector('.questions__item-desc').classList.add('questions__item-desc-none'))
      toggleButton.querySelector('.questions__item-desc').classList.remove('questions__item-desc-none');
    } else {
      toggleButton.querySelector('.questions__item-desc').classList.add('questions__item-desc-none');
    }
  })
)})