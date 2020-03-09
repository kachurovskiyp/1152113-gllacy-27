var buttonSlide_1 = document.querySelector(".slide-1-button");
var buttonSlide_2 = document.querySelector(".slide-2-button");
var buttonSlide_3 = document.querySelector(".slide-3-button");
var slide1 = document.querySelector(".slide-1");
var slide2 = document.querySelector(".slide-2");
var slide3 = document.querySelector(".slide-3");
var body = document.querySelector("body");

buttonSlide_1.addEventListener("click", function(evt){
  evt.preventDefault();
  if(!slide1.classList.contains('active')){
    slide1.classList.add('active');
    slide2.classList.remove('active');
    slide3.classList.remove('active');

    buttonSlide_1.classList.add('active');
    buttonSlide_2.classList.remove('active');
    buttonSlide_3.classList.remove('active');

    body.className = 'body-slide-1';
  }
});

buttonSlide_2.addEventListener("click", function(evt){
  evt.preventDefault();
  if(!slide2.classList.contains('active')){
    slide2.classList.add('active');
    slide1.classList.remove('active');
    slide3.classList.remove('active');

    buttonSlide_2.classList.add('active');
    buttonSlide_1.classList.remove('active');
    buttonSlide_3.classList.remove('active');

    body.className = 'body-slide-2';
  }
});

buttonSlide_3.addEventListener("click", function(evt){
  evt.preventDefault();
  if(!slide3.classList.contains('active')){
    slide3.classList.add('active');
    slide1.classList.remove('active');
    slide2.classList.remove('active');

    buttonSlide_3.classList.add('active');
    buttonSlide_1.classList.remove('active');
    buttonSlide_2.classList.remove('active');

    body.className = 'body-slide-3';
  }
});
