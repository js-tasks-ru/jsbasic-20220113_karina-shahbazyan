import createElement from '../../assets/lib/create-element.js';

export default class Carousel {
 
  constructor(slides) {
    this.slideSize = 0;
    this.slides = slides.map((item) => this.#templateForSlides(item)).join('');
    this.elem = createElement(this.#templateForElem());
    this.rightCarouselButton = this.elem.querySelector('.carousel__arrow_right');
    this.leftCarouselButton = this.elem.querySelector('.carousel__arrow_left');
    this.leftCarouselButton.style.display = 'none';
    this.slidesCounter = slides.length - 1;
    this.carouselInner = this.elem.querySelector('.carousel__inner');
    this.#translateSlides();
    this.#addSlideProduct();
  }

  #translateSlides() {
    this.elem.addEventListener('click', this.#carouselOnClick);
  }

  #addSlideProduct() {
    this.elem.addEventListener('click', this.#slideButtonOnClick)
  }
  
  #slideButtonOnClick = (event) => {
    if (event.target.closest('.carousel__button')) {
      let id = event.target.closest('[data-id]').dataset.id
      const slideButtonOnClick = new CustomEvent("product-add", {detail: id, bubbles: true});
      this.elem.dispatchEvent(slideButtonOnClick);
    }
  }

  #carouselOnClick = (event) => {
    let carouselInnerWidth = this.carouselInner.offsetWidth;
    if (event.target === this.rightCarouselButton) {
      this.leftCarouselButton.style.display = '';
      this.slideSize -= carouselInnerWidth;
      this.carouselInner.style.transform = `translateX(${this.slideSize}px)`;
      if (this.slideSize == -carouselInnerWidth*this.slidesCounter) {
        this.rightCarouselButton.style.display = "none";
      }
    }
    else if (event.target === this.leftCarouselButton) {
      this.rightCarouselButton.style= "";
      this.slideSize += carouselInnerWidth;
      this.carouselInner.style.transform = `translateX(${this.slideSize}px)`;
      if (this.slideSize == 0) {
        this.leftCarouselButton.style.display = "none";
      }
    }
  };

  #templateForSlides(item) {
    return `
    <div class="carousel__slide" data-id="${item.id}">
      <img src="/assets/images/carousel/${item.image}" class="carousel__img" alt="slide">
      <div class="carousel__caption">
        <span class="carousel__price">€${item.price.toFixed(2)}</span>
        <div class="carousel__title">${item.name}</div>
        <button type="button" class="carousel__button">
          <img src="/assets/images/icons/plus-icon.svg" alt="icon">
        </button>
      </div>
    </div>`;
  }

  #templateForElem() {
    return `
    <div class="carousel">
    
    <div class="carousel__arrow carousel__arrow_right">
      <img src="/assets/images/icons/angle-icon.svg" alt="icon">
    </div>
    <div class="carousel__arrow carousel__arrow_left">
      <img src="/assets/images/icons/angle-left-icon.svg" alt="icon">
    </div>

    <div class="carousel__inner">
      ${this.slides}
    </div>
  </div>
    `;
  }
}
