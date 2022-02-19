

export default class StepSlider {
  constructor({ steps, value = 0 }) {
    this.steps = `<span></span>\n`.repeat(steps);
    this.elem = document.createElement('div');
    this.elem.classList.add('slider');
    const stepSliderContent = this.#templateForStepSlider(this.steps);
    this.elem.innerHTML = stepSliderContent;
    this.arrayOfSteps = Array.from(this.elem.querySelectorAll('span'));
    this.arrayOfSteps[1].classList.add('slider__step-active');
    this.sliderValue = this.elem.querySelector('.slider__value');
    this.sliderValue.innerText = value;
    this.progress = this.elem.querySelector('.slider__progress');
    this.progress.style.width = `${0}%`
    this.#stepSliderChanger();
  }

  #stepSliderChanger() {
    this.elem.addEventListener('click', this.#stepSliderOnClick)
  }

  #stepSliderOnClick = (event) => {
    let thumb = this.elem.querySelector('.slider__thumb');
    let progress = this.elem.querySelector('.slider__progress');
    let left = event.clientX - this.elem.getBoundingClientRect().left;
    let leftRelative = left / this.elem.offsetWidth;
    let segments = this.arrayOfSteps.length - 2;
    let approximateValue = leftRelative * segments;
    let value = Math.round(approximateValue);
    let valuePercents = value / segments * 100;
    this.sliderValue.innerText = value;

    this.arrayOfSteps.forEach((item) => { item.classList.remove('slider__step-active')});
    this.arrayOfSteps[value+1].classList.add('slider__step-active');
      
    thumb.style.left = `${valuePercents}%`;
    progress.style.width = `${valuePercents}%`;
    const stepEvent = new CustomEvent('slider-change', { 
      detail: value, 
      bubbles: true 
    })
    this.elem.dispatchEvent(stepEvent);

      
  } 
  
  #templateForStepSlider(steps) {
    return `
    

      <!--Ползунок слайдера с активным значением-->
      <div class="slider__thumb">
        <span class="slider__value">0</span>
      </div>

      <!--Полоска слайдера-->
      <div class="slider__progress"></div>

      <!-- Шаги слайдера (вертикальные чёрточки) -->
      <div class="slider__steps">
        <!-- текущий выбранный шаг выделен этим классом -->
        ${steps}
      </div>
    
    `;
  }
}
