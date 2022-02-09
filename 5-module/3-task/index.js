function initCarousel() {
  const carousel = document.querySelector(".carousel");
  const allSlides = document.querySelector('.carousel__inner');
  const rightButton = document.querySelector('.carousel__arrow_right');
  const leftButton = document.querySelector('.carousel__arrow_left');
 
  let slideSize = 0;
  
  leftButton.style.display = 'none';
  
  const OnClick = (event) => {
    if (event.target === rightButton) {
        leftButton.style.display = '';
        slideSize-= allSlides.offsetWidth;
        allSlides.style.transform = `translateX(${slideSize}px)`;
        if (slideSize == -allSlides.offsetWidth*3){
          rightButton.style= "display:none"
        }
    }
    else if (event.target === leftButton) {
        rightButton.style= "";
        slideSize+= allSlides.offsetWidth;
        allSlides.style.transform = `translateX(${slideSize}px)`;
        if (slideSize == 0) {
          leftButton.style.display = 'none'
        }
    }
  }

  carousel.addEventListener('click', OnClick);

}