import createElement from '../../assets/lib/create-element.js';

export default class RibbonMenu {
  constructor(categories) {
    this.categories = categories.map((item) => this.#templateForCategories(item)).join('\n');
    this.elem = createElement(this.#templateForElem());
    this.ribbonArrowRight = this.elem.querySelector(".ribbon__arrow_right");
    this.ribbonArrowRight.classList.add('ribbon__arrow_visible');
    this.ribbonArrowLeft = this.elem.querySelector(".ribbon__arrow_left");
    this.ribbonArrowLeft.classList.remove('ribbon__arrow_visible');
    this.ribbonInner = this.elem.querySelector(".ribbon__inner")
    this.#ribbonScroll()
    this.#selectCategory()
  }

  #ribbonScroll() {
    this.elem.addEventListener('click', this.#ribbonOnClick);
  }

  #selectCategory() {
    this.elem.addEventListener('click', this.#categoryOnClick);
  }

  #categoryOnClick = (event) => {
   if (event.target.closest('.ribbon__item')) {
    event.preventDefault();
    let arrayOfCategory = Array.from(this.elem.querySelectorAll('.ribbon__item'));
    arrayOfCategory.forEach((item) => item.classList.remove('ribbon__item_active'));
    event.target.classList.toggle('ribbon__item_active');

    let id = event.target.closest('[data-id]').dataset.id;
    const categoryOnClick = new CustomEvent('ribbon-select' , { detail: id, bubbles: true});
    this.elem.dispatchEvent(categoryOnClick);
   }
  }

  #ribbonOnClick = (event) => {
    if (event.target === this.ribbonArrowRight) {
      this.ribbonInner.scrollBy(350, 0);
      this.ribbonArrowLeft.classList.add('ribbon__arrow_visible');
      if (this.ribbonInner.scrollWidth - this.ribbonInner.scrollLeft - this.ribbonInner.clientWidth < 1) {
        this.ribbonArrowRight.classList.remove('ribbon__arrow_visible');
      }
    }
    else if (event.target === this.ribbonArrowLeft) {
      this.ribbonInner.scrollBy(-350, 0);
      this.ribbonArrowRight.classList.add('ribbon__arrow_visible');
      if (this.ribbonInner.scrollLeft == 0) {
        this.ribbonArrowLeft.classList.remove('ribbon__arrow_visible');
      }
    }
  }

  #templateForCategories(item) {
    return `<a href="#" class="ribbon__item" data-id="${item.id}">${item.name}</a>`;
  }

  #templateForElem() {
    return `<div class="ribbon">
    <!--Кнопка прокрутки влево-->
    <button class="ribbon__arrow ribbon__arrow_left ribbon__arrow_visible">
      <img src="/assets/images/icons/angle-icon.svg" alt="icon">
    </button>

    <!--Ссылки на категории-->
    <nav class="ribbon__inner">
      ${this.categories}
    </nav>

    <!--Кнопка прокрутки вправо-->
    <button class="ribbon__arrow ribbon__arrow_right">
      <img src="/assets/images/icons/angle-icon.svg" alt="icon">
    </button>
  </div>`;
  }
}
